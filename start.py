##
# A script for running jsPsych experiments trough experimental factory.
# To add experiments go to line starting with subprocess.call(("docker run -v " + os.getcwd() + ":/data vanessa/expfactory-builder build
# and add after build: /data/name_of_your_experiment
# A randomizer function (not implemented yet) assigns diferent parameters for diferents experiments for the subject
# This tsv is added to some experimetns that need them and is used to know wath the subjects whent trough
# The script uses google drive python modules to sync results and ensure that users have unique experiments
##



# Here start all imports of modules and programs needed.



#Brings python3 print function from the future
from __future__ import print_function
#Calls other programs installed in linux
import subprocess
#Parses json results
import json
#Used for waiting on other deatached server
import time
#Takes parsed json to csv or tsv, reads tokens
import csv
#For reading arguments from command line
import sys
#Deals with files and directories
import os
#Deals with files for google drive
import io

#For tsv manipulation
try:
    import numpy
except ImportError:
    print("Numpy python plugin not installed")  
    exit(1)
#For tsv manipulation
try:
    import pandas
except ImportError:
    print("Pandas python plugin not installed")
    exit(1)
#For clipboard support
try:
    import gtk
except ImportError:
    print("Gtk python plugin not installed")
    exit(1)
#For google file uploading and downloading
try:
    from apiclient import discovery
    from apiclient.http import MediaFileUpload
    from apiclient.http import MediaIoBaseDownload
except ImportError:
    print("Google python api not installed")
    exit(1)
#For google authentication
try:
    from google.oauth2 import service_account
except ImportError:
    print("Google python oath2 plugin not installed")
    exit(1)

#For web browser controll
try:
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.chrome.options import Options
except ImportError:
    print("Seleniumm python plugin not installed")
    exit(1)

#Name of the tokens file, tar file and config file.
filename = "tokens.tsv"
imagename = "experiments.tar"
config_file_name = "experiment.cfg"

#Check if the user has acces to docker and check if a stray container exist (if there other containers running in the enviorement this should be disabled)
try:
    container = subprocess.check_output("docker ps --quiet --latest".split())[:-1]
    if(container != ""):
        subprocess.call(["docker", "stop", container])
except:
    print("Docker not ready")
    exit(1)

#Scopes is a google concept for limiting wath a srcipt can do
SCOPES = ['https://www.googleapis.com/auth/drive.file']
#A service account allows acces to functionalities of google as a normal users without having to create an actual account and password
SERVICE_ACCOUNT_FILE = 'service_secret.json'

# Check for chromedriver
if(not os.path.isfile('/bin/chromedriver')):
    print("Chromedriver not found.")
    exit(1)



# Here starts the part that the experimenter should run trough divided in configuration and docker creation



# Check for different status of the experiment.cfg file
if(not os.path.isfile(imagename) and os.path.isfile(config_file_name)):
    #If there is not an image delete the config file
    subprocess.call(["rm", config_file_name])
if(not os.path.isfile(config_file_name)):
    #if there is not config file, create one using arguments from console
    if(len(sys.argv) != 2):
        print("Arguments for first run are [output_path]\n\n Always start with ~/ for home folder.")
        exit(1)
    #Tajes the arguments potentialy split on multiple parts and joins it as single strign
    output_path = " ".join(sys.argv[1:])
    print(output_path)
    #Takes the string and split it in directories, check if the path starts with home and warns otherwise
    if(output_path.split("/")[1] != "home"):
        print("Arguments for first run are [output_path]\n\n Always start with ~/ for home folder.")
        exit(1)
    #Splits the string in directories and join it as a path
    output_path = "/".join(output_path.split("/")[3:])
    #If the directorie doesn't exist create it and its parent directories
    if(not os.path.isdir(output_path)):
        subprocess.call(["mkdir", "-p", os.path.expanduser('~/') + output_path])
    #Locks the user until an allowed answer is given
    while(True):
        option = raw_input("Use google drive?(Y,n) ")
        if(option in ["n", "N", "no", "No"]):
            #If the answer is a form of no disable google drive with the boolean parameter "usingDrive" writes this to the config file
            usingGDrive = False
            config_file = open(config_file_name, "w")
            config_file.write("usingGDrive: false\n")
            config_file.close()
            break
        elif(option in ["", "y", "Y", "yes", "Yes"]):
            # Tries to create  a google service account driver for storing tokens.tsv on fails warns and repeats
            try:
                if(not os.path.isfile(SERVICE_ACCOUNT_FILE)):
                    #Checks for secret file from the service account
                    print(SERVICE_ACCOUNT_FILE + " not found.")
                else:
                    #Credentials allow acces to services, services represent google tools or services
                    credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
                    drive_service = discovery.build('drive', 'v3', credentials=credentials)
                    # Create folder for tokens.tsv and save the id of it
                    folder_id = drive_service.files().create(body={'name': 'Bayes_experiment', 'mimeType': 'application/vnd.google-apps.folder'}, fields='id').execute().get('id')
                    # Save drive choice and file id
                    config_file = open(config_file_name, "w")
                    config_file.write("usingGDrive: true\n")
                    config_file.write("folderID: " + folder_id + "\n")
                    config_file.close()
                    usingGDrive = True
                    #Frees the user from the while lock
                    break
            except:
                print("Problem conecting to google drive.")
    #Add to the config file the output path
    config_file = open(config_file_name, "a")
    config_file.write("output_path: " + output_path + "\n")
    config_file.close()
#Check wether google drive is used or not, check if google drive connection is up
elif(open(config_file_name, "r").readline() == "usingGDrive: false\n"):
    usingGDrive = False
    output_path = open(config_file_name, "r").readlines()[1][13:]
    #Checks again for the existance of the output path
    if(not os.path.isdir(output_path)):
        subprocess.call(["mkdir", "-p", os.path.expanduser('~/') + output_path])
elif(open(config_file_name, "r").readline() == "usingGDrive: true\n"):
    #Locks the user until it instructs it to stop retring
    retry = True
    while(retry):
        #Tries to use google drive
        try:
            #Create drive service with credentials
            credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
            drive_service = discovery.build('drive', 'v3', credentials=credentials)
            #Reads from the config file
            folder_id = open(config_file_name, "r").readlines()[1][10:-1]
            output_path = open(config_file_name, "r").readlines()[2][13:-1]
            tokens_id = open(config_file_name, "r").readlines()[3][11:-1]
            usingGDrive = True
            retry = False
            if(not os.path.isdir(output_path)):
                subprocess.call(["mkdir", "-p", os.path.expanduser('~/') + output_path])
        except:
            print("Problem conecting to google drive.")
            while(True):
                option = raw_input("Retry or use local:(Retry,local)")
                if(option in ["", "R", "r", "Retry", "retry"]):
                    retry = True
                    break
                elif(option in ["L", "l", "local", "Local"]):
                    if(not os.path.isfile(filename)):
                        raw_input("Local file not found. Press enter to retry.")
                        retry = True
                        break
                    else:
                        #Gives up on google drive and continues locally
                        usingGDrive = False
                        output_path = open(config_file_name, "r").readlines()[1][13:]
                        #Checks again for output path
                        if(not os.path.isdir(output_path)):
                            subprocess.call(["mkdir", "-p", os.path.expanduser('~/') + output_path])
                        retry = False
                        break
    # load folder id
else:
    print("Redownload experiment to configure correctly")
    exit()



# Here starts the docker creation and tokens creation



# Set up experiment if tar is not found
if(not os.path.isfile(imagename)):
    #Remove old Docker files
    if(os.path.isfile("Dockerfile")):
        os.remove("Dockerfile")
    if(os.path.isfile("startscript.sh")):
        os.remove("startscript.sh")
    #Uses vanessa/expfactory-builder to create a recipe for docker file
    experiments_list = []
    experiments = ''
    for element in os.listdir(os.getcwd()):
        if(os.path.isdir(element) and element != '.git'):
            experiments_list.append(element)
            experiments += ' /data/' + element
    subprocess.call(("docker run -v " + os.getcwd() + ":/data vanessa/expfactory-builder build" + experiments).split())
    print("Building...")
    #Now uses the recipe to build the image
    image = subprocess.check_output("docker build --quiet .".split())[7:-1]
    #Runs the image in another thread
    container = subprocess.check_output(["docker", "run", "-d", image, "start"])[:-1]
    #Opens the token file and instruct the container to create valid tokens for the subjects
    file = open(filename, 'w')
    raw_runs = raw_input("Input number of runs or csv file:")
    try:
        runs = int(raw_runs)
        file.write(subprocess.check_output(["docker", "exec", container, "expfactory", "users", "--new", str(runs)]))
    except ValueError:
        runs_list = list(csv.reader(open(raw_runs, 'r'), delimiter=','))
        if('bayesItems' in runs_list[0]):
            runs_list  = numpy.array(runs_list)[:,:runs_list[0].index('bayesItems')]
            bayes_list = numpy.array(runs_list)[:,runs_list[0].index('bayesItems'):]
        else:
            bayes_list = [None] * len(runs_list)
        tokens_list = subprocess.check_output(["docker", "exec", container, "expfactory", "users", "--new", str(len(runs_list))]).split('\n')[1:-1]
        tokens_csv_list = []
        for token,run,bayes in zip(tokens_list,runs_list,bayes_list):
            csv_row = token.split('\t')
            token_experiments_list = []
            run_experiments_list = list(experiments_list)
            for command in run:
                if(command in run_experiments_list):
                    token_experiments_list.append(command)
                    run_experiments_list.remove(command)
                elif(command == 'random'):
                    token_experiments_list += numpy.random.shuffle(run_experiments_list)
                elif(command[:7] == 'random(' and command[-1] == ')'):
                    try:
                        random_ammount = int(command[7:-1])
                        numpy.random.shuffle(run_experiments_list)
                        while(random_ammount > 0):
                            if(len(run_experiments_list) == 0):
                                print("Random out of range.")
                                subprocess.call(["docker", "stop", container])
                                print("Cleaning...")
                                os.remove("Dockerfile")
                                os.remove("startscript.sh")
                                subprocess.call(["docker", "rmi", image, "--force"])
                                exit(1)
                            token_experiments_list += run_experiments_list.pop()
                            random_ammount -= 1
                    except:
                        random_experiments = command[7:-1].split(',')
                        for experiment in random_experiments:
                            if(experiment in token_experiments_list):
                                random_experiments.remove(experiment)
                        token_experiments_list += numpy.random.shuffle(random_experiments)[0]
            csv_row.append(','.join(token_experiments_list))
            if(bayes):
                csv_row += bayes
            tokens_csv_list.append(csv_row)
        tsv = csv.writer(file, delimiter="\t")
        tsv.writerows(tokens_csv_list)
    file.close()
    print("Tsv generated.")
    # commit breaks things don't use. image = subprocess.check_output(["docker", "commit", container])[7:-1]
    #Stop the conteiner and saves it as a tar
    subprocess.call(["docker", "stop", container])
    print("Creating experiments.tar...")
    subprocess.call(["docker", "save", "--output", imagename, image])
    print("Cleaning...")
    #   subprocess.call(["docker", "rmi", image, "--force"])
    #Removes docker recipes
    os.remove("Dockerfile")
    os.remove("startscript.sh")
    #Removes the image from the system to save space
    subprocess.call(["docker", "rmi", image, "--force"])
    if(usingGDrive):
        #Try to upload tsv if using google drive, until succes.
        while(True):
            try:
                #File metadata determines how te file will look on the drive
                file_metadata = {'name': 'tokens.tsv', 'parents': [folder_id]}
                #Media determines from where and wath is the file to upload
                media = MediaFileUpload('tokens.tsv', mimetype='text/tsv', resumable=False)
                tokens_id = drive_service.files().create(body=file_metadata, media_body=media, fields='id').execute().get("id")
                #The file is referenced trough an id, that is saved to the config file
                config_file = open(config_file_name, "a")
                config_file.write("tokens_id: " + tokens_id + "\n")
                config_file.close()
                break
            except:
                print("Couldn't upload tokens, retrying.")



# Here start the part that the subjects see.


# Load image from tar file
print("Loading...")
image = subprocess.check_output(["docker", "load", "--input", imagename])[-65:-53]
while(True):
    #Chose the number of the token to use
    option = raw_input("Input user id:")
    try:
        user_id = int(option)
        break
    except ValueError:
        pass

# Get token for new experiment
if(usingGDrive):
    retry = True
    while(retry):
        try:
            #Reads the id of the token file from the config file
            tokens_id = open(config_file_name, "r").readlines()[3][11:-1]
            # Download tokens.tsv from google drive
            request = drive_service.files().get_media(fileId=tokens_id)
            #Creates a file with the corresponding file name for google downloader to write to
            fh = io.FileIO(filename, 'wb')
            #Creates a google downloader for the file
            downloader = MediaIoBaseDownload(fh, request)
            done = False
            while done is False:
                status, done = downloader.next_chunk()
            fh.close()
            retry = False
        except:
            print("Couldn't download tokens.")
            while(True):
                option = raw_input("Retry or use local:(Retry,local)")
                if(option in ["", "R", "r", "Retry", "retry"]):
                    retry = True
                    break
                elif(option in ["L", "l", "local", "Local"]):
                    if(not os.path.isfile(filename)):
                        raw_input("Local file not found. Press enter to retry.")
                        retry = True
                    else:
                        retry = False
tsv = csv.reader(open(filename, 'r'), delimiter="\t")
token = ""
#Rows will be stored here for updating the tsv
rows = []
i = 0
# Find token chossen in token.tsv and check usability
for row in tsv:
    if(i == user_id):
        if(row[1][-8:-1] == "revoked"):
            while(True):
                option = raw_input("Token is already taken, overwrite?:(y,N)")
                if(option in ["", "n", "N", "no", "No"]):
                    exit()
                elif(option in ["y", "Y", "yes", "Yes"]):
                    backup_number = 1
                    #Check if there is already backups for deciding backup name, check if ther was a incomplete atempt or a complete one
                    if(os.path.isdir(os.path.expanduser('~/') + output_path + "/backup/" + row[1][:36] + "_backup1")):
                        # Create backup and reuse token
                        while(os.path.isdir(os.path.expanduser('~/') + output_path + "/backup/" + row[1][:36] + "_backup" + str(backup_number))):
                            backup_number += 1
                    if(os.path.isdir(os.path.expanduser('~/') + output_path + "/experiments/" + row[1][:36])):
                        subprocess.call(["mkdir", "-p", os.path.expanduser('~/') + output_path + "/backup/"])
                        subprocess.call(["mv", os.path.expanduser('~/') + output_path + "/experiments/" + row[1][:-9], os.path.expanduser('~/') + output_path + "/backup/" + row[1][:-9] + "_backup" + str(backup_number)])
                        break
                    elif(os.path.isdir(os.path.expanduser('~/') + output_path + "/experiments/" + row[1][:36] + "_finished")):
                        while(True):
                            option = raw_input("Token was already finished, overwrite?:(y,N)")
                            if(option in ["", "n", "N", "no", "No"]):
                                exit()
                            elif(option in ["y", "Y", "yes", "Yes"]):
                                subprocess.call(["mkdir", "-p", os.path.expanduser('~/') + output_path + "/backup/"])
                                subprocess.call(["mv", os.path.expanduser('~/') + output_path + "/experiments/" + row[1][:36] + "_finished", os.path.expanduser('~/') + output_path + "/backup/" + row[1][:36] + "_backup" + str(backup_number)])
                                break
                        break
                    else:
                        break
        #Make necesary directories
        if(not os.path.isdir(os.path.expanduser('~/') + output_path + "/experiments/" + row[1][:36])):
            subprocess.call(["mkdir", "-p", os.path.expanduser('~/') + output_path + "/experiments/" + row[1][:36]])
        if(not os.path.isdir(os.getcwd() + "/temp")):
            subprocess.call(["mkdir", "-p", os.getcwd() + "/temp"])
        else:
            #If thers is already a temp folder, clear it and remake it
            subprocess.call(["rm", "-r", os.getcwd() + "/temp"])
            subprocess.call(["mkdir", "-p", os.getcwd() + "/temp"])
        token = row[1][:36]
        print(token)
        #Tsv should be searched to choose experiments and order
        token_experiments = row[2]
        bayes_rows = []
        for item_bayes in row[2:]:
            bayes_rows.append(item_bayes.split('_'))
        bayes_csv = csv.writer(open("bayes.csv", "wb"), delimiter=",")
        csv.writerows(bayes_rows)
        bayes_csv.close()
        rows.append([row[0], token + "[revoked]", row[1:]])
    else:
        rows.append(row)
    i += 1
#Token file is rewriten
file = open("tokens.tsv", "wb")
tsv = csv.writer(file, delimiter="\t")
tsv.writerows(rows)
file.close()
#If using google drive, update tokens in it
if(usingGDrive):
    retry = True
    while(retry):
        try:
            file_metadata = {'name': 'tokens.tsv'}
            media = MediaFileUpload('tokens.tsv', mimetype='text/tsv', resumable=False)
            drive_service.files().update(fileId=tokens_id, body=file_metadata, media_body=media).execute()
            retry = False
        except:
            print("Problem updating google drive tokens")
            while(True):
                option = raw_input("Retry?(Y,n)")
                if(option in ["", "Y", "y", "Yes", "yes"]):
                    retry = True
                    break
                elif(option in ["N", "n", "no", "No"]):
                    retry = False

#Check if an active token was found.
if(token == ""):
    print("Study ended or id not found")

# Start container, upload used token and copy data to container.
else:
    # Store default keymap to default.
    subprocess.call(["xmodmap", "-pke"], stdout=open("default", "w"))
    print("Seting up experiment.")
    container = subprocess.check_output(["docker", "run", "-d", "-p", "80:80", image, "--headless", "--no-randomize", "--experiments", token_experiments, "start"])[:-1]
    time.sleep(10)
    #Add the modifications to the docker container
    subprocess.call(["docker", "cp", filename, container + ":/scif/apps/bayes"])
    subprocess.call(["docker", "exec", container, "mkdir", "/scif/data/expfactory/" + token])
    #continue experiment?
    while(True):
        option = raw_input("Start experiment?(y/n) ")
        #If no, token is released and depending if google drive is in use, update it.
        if(option in ["n","N","no","No"]):
            subprocess.call(["docker", "rmi", image, "--force"])
            rows[user_id] = [row[0], token + "[active]"]
            file = open("tokens.tsv","wb")
            tsv = csv.writer(file,delimiter="\t")
            tsv.writerows(rows)
            file.close()
            subprocess.call(["docker", "stop", container])
            subprocess.call(["docker", "rm", container])
            subprocess.call(["docker", "rmi", image, "--force"])
            if(usingGDrive):
                retry = True
                while(retry):
                    try:
                        file_metadata = {'name': 'tokens.tsv'}
                        media = MediaFileUpload('tokens.tsv', mimetype='text/tsv', resumable=False)
                        drive_service.files().update(fileId=tokens_id, body=file_metadata, media_body=media).execute()
                        retry = False
                    except:
                        print("Problem updating google drive tokens")
                        while(True):
                            option = raw_input("Retry?(Y,n)")
                            if(option in ["", "Y", "y", "Yes", "yes"]):
                                retry = True
                                break
                            elif(option in ["N", "n", "no", "No"]):
                                retry = False
            exit()
        elif(option in ["y","Y","yes","Yes"]):
            break
    print("Experiment started.")
    chrome_options = Options()
    #Enable kiosk mode unless --debug is specified
    if(len(sys.argv) == 1):
        chrome_options.add_argument("--kiosk")
    elif(sys.argv[2] != "--debug"):
        chrome_options.add_argument("--kiosk")
    chrome_options.add_argument("--disable-infobars")
    driver = webdriver.Chrome(chrome_options=chrome_options)
    driver.get("http://localhost/")
    wait = WebDriverWait(driver, 10)
    element = wait.until(EC.element_to_be_clickable((By.ID, 'token')))
    tokenField = driver.find_element_by_id("token")
    #Move token to clipboard
    clipboard = gtk.clipboard_get()
    clipboard.set_text(token)
    clipboard.store()
    print("Token copied to clipboard.")
    tokenField.send_keys(token)
    print("Token writen.")
    driver.fullscreen_window()
    # Block keys with file block_keys unless --debug is specified
    if(len(sys.argv) == 1):
        subprocess.call(["xmodmap", "block_keys"])
    elif(sys.argv[2] != "--debug"):
        subprocess.call(["xmodmap", "block_keys"])
    buttonNext = driver.find_element_by_xpath("//button[1]")
    buttonNext.click()
    print("Experiment in fullscren and started.")
    urlAddress = driver.current_url
    print(urlAddress)
    #While the address is diferent to "http://localhost/finish", get adress changes and backup results as they advance.
    end_condition = False
    while (not end_condition):
        try:
            time.sleep(1)
            if not urlAddress == driver.current_url:
                #Backup results.
                if(urlAddress != "http://localhost/finish"):
                     subprocess.call(["docker", "cp", container + ":/scif/data/expfactory/" + token + "/", os.getcwd() + "/temp"])
                     urlAddress = driver.current_url
                     print(urlAddress)
                end_condition = driver.current_url == "http://localhost/finish"
        except:
            driver = webdriver.Chrome(chrome_options=chrome_options)
            driver.get("http://localhost/")
    subprocess.call(["docker", "cp", container + ":/scif/data/expfactory/" + token + "_finished/", os.getcwd() + "/temp"])


    ##
    # Here the experiment ends and data pre-procecing starts including backups and format modifications
    ##


    #Free keys for alt-tab
    subprocess.call(["xmodmap","-e","keycode 23 = Tab ISO_Left_Tab Tab ISO_Left_Tab"])
    subprocess.call(["xmodmap","-e","keycode 64 = Alt_L Meta_L Alt_L Meta_L"])
    end_condition = False
    while(not end_condition):
        flag = raw_input("Input end:")
        end_condition = flag == "end"
    #Restore default keymap to default twice?
    subprocess.call(["xmodmap","default"])
    subprocess.call(["xmodmap","default"])
    subprocess.call(["rm", "default"])
    # get tokens status from container
    token_list = subprocess.check_output(["docker", "exec", container, "expfactory", "users", "--list"]).split()
    #If token is finished backup finished resutls and delete unfinished results.
    if((token + "[finished]") in token_list):
        subprocess.call(["docker", "cp", container + ":/scif/data/expfactory/" + token + "_finished", os.path.expanduser('~/') + output_path + "/experiments"])
        subprocess.call(["rm", "-r", os.getcwd() + "/temp/" + token])
        subprocess.call(["rm", "-r", os.path.expanduser('~/') + output_path + "/experiments/" + token])
        print("The experiment finished successfully.")
    #If token is not finished alert and do not delete anything
    elif((token + "[active]") in token_list):
        print("The experiment was NOT finished.")
    #If token was not in container alert but continue.
    else:
        print("Error: unknown token.")
    #If using google drive convert temp folder files and prepare for batch upload to new folder
    if(usingGDrive):
        retry = True
        while(retry):
            try:
                #Convert and upload files on test folder
                token_folder = drive_service.files().create(body={'name': token, 'parents': [folder_id], 'mimeType': 'application/vnd.google-apps.folder'}, fields='id').execute().get('id')
                batch_upload = drive_service.new_batch_http_request()
                for json_file in os.listdir(os.getcwd() + "/temp/" + token + "_finished/"):
                    content = json.load(open(os.getcwd() + "/temp/" + token + "_finished/" + json_file, 'r'))
                    results = json.loads(content['data'])
                    pandas.DataFrame.from_dict(results).to_csv(os.getcwd() + "/temp/" + token + "_finished/" + json_file[:-5] + ".tsv", sep=None)
                    body={'name': json_file, 'parents': [token_folder]}
                    media_body=MediaFileUpload(os.getcwd() + "/temp/" + token + "_finished/" + json_file, mimetype='text/json', resumable=False)
                    batch_upload.add(drive_service.files().create(body=body, media_body=media_body))
                    body={'name': json_file[:-5] + ".tsv", 'parents': [token_folder]}
                    media_body=MediaFileUpload(os.getcwd() + "/temp/" + token + "_finished/" + json_file[:-5] + ".tsv", mimetype='text/csv', resumable=False)
                    batch_upload.add(drive_service.files().create(body=body, media_body=media_body))
                retry = False
            except:
                print("Problem creating results folder in google drive for token.")
                while(True):
                    option = raw_input("Retry?(Y,n)")
                    if(option in ["", "Y", "y", "Yes", "yes"]):
                        retry = True
                        break
                    elif(option in ["N", "n", "no", "No"]):
                        retry = False
                        break
    #If experiment was finished, convert finished results
    if(os.path.isdir(os.path.expanduser('~/') + output_path + "/experiments/" + token + "_finished")):
        for json_file in os.listdir(os.path.expanduser('~/') + output_path + "/experiments/" + token + "_finished"):
            content = json.load(open(os.path.expanduser('~/') + output_path + "/experiments/" + token + "_finished/" + json_file, 'r'))
            results = json.loads(content['data'])
            pandas.DataFrame.from_dict(results).to_csv(os.path.expanduser('~/') + output_path + "/experiments/" + token + "_finished/" + json_file[:-5] + ".csv", sep=None)
    #if there are unfinished resutls convert
    if(os.path.isdir(os.path.expanduser('~/') + output_path + "/experiments/" + token)):
        for json_file in os.listdir(os.path.expanduser('~/') + output_path + "/experiments/" + token):
            content = json.load(open(os.path.expanduser('~/') + output_path + "/experiments/" + token + "/" + json_file, 'r'))
            results = json.loads(content['data'])
            pandas.DataFrame.from_dict(results).to_csv(os.path.expanduser('~/') + output_path + "/experiments/" + token + "/" + json_file[:-5] + ".csv", sep=None)
    #Clear docker files from system after stoping container
    subprocess.call(["docker", "stop", container])
    subprocess.call(["docker", "rm", container])
    subprocess.call(["docker", "rmi", image, "--force"])
    #Try to upload temp files.
    if(usingGDrive):
        retry = True
        while(retry):
            try:
                batch_upload.execute()
                retry = False
            except:
                print("Problem uploading results to google drive.")
                while(True):
                    option = raw_input("Retry?(Y,n)")
                    if(option in ["", "Y", "y", "Yes", "yes"]):
                        retry = True
                        break
                    elif(option in ["N", "n", "no", "No"]):
                        retry = False
    #Finally, close browser and exit.
    driver.close()
    exit()
