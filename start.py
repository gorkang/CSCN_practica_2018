from __future__ import print_function
import subprocess
import json
import time
import csv
import sys
import os
import io

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

try:
    container = subprocess.check_output("docker ps --quiet --latest".split())[:-1]
    if(container != ""):
        subprocess.call(["docker", "stop", container])
except:
    print("Docker not ready")
    exit(1)

SCOPES = ['https://www.googleapis.com/auth/drive.file']
SERVICE_ACCOUNT_FILE = 'service_secret.json'

# Check for chromedriver
if(not os.path.isfile('/bin/chromedriver')):
    print("Chromedriver not found.")
    exit(1)

# Check for different status of the experiment.cfg file
if(not os.path.isfile(imagename) and os.path.isfile(config_file_name)):
    subprocess.call(["rm", config_file_name])
if(not os.path.isfile(config_file_name)):
    if(len(sys.argv) != 2):
        print("Arguments for first run are [output_path]\n\n Always start with ~/ for home folder.")
        exit(1)
    output_path = " ".join(sys.argv[1:])
    print(output_path)
    if(output_path.split("/")[1] != "home"):
        print("Arguments for first run are [output_path]\n\n Always start with ~/ for home folder.")
        exit(1)
    output_path = "/".join(output_path.split("/")[3:])
    if(not os.path.isdir(output_path)):
        subprocess.call(["mkdir", "-p", os.path.expanduser('~/') + output_path])
    while(True):
        option = raw_input("Use google drive?(Y,n) ")
        if(option in ["n", "N", "no", "No"]):
            usingGDrive = False
            config_file = open(config_file_name, "w")
            config_file.write("usingGDrive: false\n")
            config_file.close()
            break
        elif(option in ["", "y", "Y", "yes", "Yes"]):
            # Create google service account driver for storing tokens.tsv
            try:
                if(not os.path.isfile(SERVICE_ACCOUNT_FILE)):
                    print(SERVICE_ACCOUNT_FILE + " not found.")
                else:
                    credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
                    drive_service = discovery.build('drive', 'v3', credentials=credentials)
                    # Create folder for tokens.tsv
                    folder_id = drive_service.files().create(body={'name': 'Bayes_experiment', 'mimeType': 'application/vnd.google-apps.folder'}, fields='id').execute().get('id')
                    # Save drive choice and file id
                    config_file = open(config_file_name, "w")
                    config_file.write("usingGDrive: true\n")
                    config_file.write("folderID: " + folder_id + "\n")
                    config_file.close()
                    usingGDrive = True
                    break
            except:
                print("Problem conecting to google drive.")
    config_file = open(config_file_name, "a")
    config_file.write("output_path: " + output_path + "\n")
    config_file.close()
#Check wether google drive is used or not, check if google drive connection is up if yes
elif(open(config_file_name, "r").readline() == "usingGDrive: false\n"):
    usingGDrive = False
    output_path = open(config_file_name, "r").readlines()[1][13:]
    if(not os.path.isdir(output_path)):
        subprocess.call(["mkdir", "-p", os.path.expanduser('~/') + output_path])
elif(open(config_file_name, "r").readline() == "usingGDrive: true\n"):
    retry = True
    while(retry):
        try:
            #Create drive service with credentials
            credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
            drive_service = discovery.build('drive', 'v3', credentials=credentials)
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
                        usingGDrive = False
                        output_path = open(config_file_name, "r").readlines()[1][13:]
                        if(not os.path.isdir(output_path)):
                            subprocess.call(["mkdir", "-p", os.path.expanduser('~/') + output_path])
                        retry = False
                        break

    # load folder id
else:
    print("Redownload experiment to configure correctly")
    exit()

# Set up experiment if tar is not found
if(not os.path.isfile(imagename)):
    if(os.path.isfile("Dockerfile")):
        os.remove("Dockerfile")
    if(os.path.isfile("startscript.sh")):
        os.remove("startscript.sh")
    subprocess.call(("docker run -v " + os.getcwd() + ":/data vanessa/expfactory-builder build /data/ansiedad_matematica /data/comprension_lectora /data/habilidad_matematica /data/memoria_funcional /data/rotacion_mental /data/crtnum /data/crt_verbal /data/graph_literacy /data/matrices /data/numeracy /data/bayes").split())
    print("Building...")
    pre_image = subprocess.check_output("docker build --quiet .".split())[7:-1]
    container = subprocess.check_output(["docker", "run", "-d", pre_image, "start"])[:-1]
    file = open(filename, 'w')
    file.write(subprocess.check_output(["docker", "exec", container, "expfactory", "users", "--new", str(input("Input number of runs:"))]))
    file.close()
    print("Tsv generated.")
    # subprocess.call(randomizer)
    subprocess.call(["docker", "cp", filename, container + ":/scif/apps/bayes"])
    # commit breaks things. image = subprocess.check_output(["docker", "commit", container])[7:-1]
    subprocess.call(["docker", "stop", container])
    print("Creating experiments.tar...")
    subprocess.call(["docker", "save", "--output", imagename, pre_image])
    print("Cleaning...")
    #   subprocess.call(["docker", "rmi", image, "--force"])
    os.remove("Dockerfile")
    os.remove("startscript.sh")
    subprocess.call(["docker", "rmi", pre_image, "--force"])
    if(usingGDrive):
        #Try to upload tsv if using google drive, until succes.
        while(True):
            try:
                file_metadata = {'name': 'tokens.tsv', 'parents': [folder_id]}
                media = MediaFileUpload('tokens.tsv', mimetype='text/tsv', resumable=False)
                tokens_id = drive_service.files().create(body=file_metadata, media_body=media, fields='id').execute().get("id")
                config_file = open(config_file_name, "a")
                config_file.write("tokens_id: " + tokens_id + "\n")
                config_file.close()
                break
            except:
                print("Couldn't upload tokens, retrying.")


# Load image from file
print("Loading...")
image = subprocess.check_output(["docker", "load", "--input", imagename])[-65:-53]
while(True):
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
            tokens_id = open(config_file_name, "r").readlines()[3][11:-1]
            # Download tokens.tsv from google drive
            request = drive_service.files().get_media(fileId=tokens_id)
            fh = io.FileIO(filename, 'wb')
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
        token_experiments = "bayes,ansiedad_matematica,comprension_lectora,crtnum,crt_verbal,graph_literacy,habilidad_matematica,matrices,memoria_funcional,rotacion_mental"
        rows.append([row[0], token + "[revoked]"])
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
    # chrome_options.add_argument("--kiosk")
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
    # Block keys with file block_keys
    #subprocess.call(["xmodmap", "block_keys"])
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
                token_folder = drive_service.files().create(body={'name': token, 'parents': [folder_id], 'mimeType': 'application/vnd.google-apps.folder'}, fields='id').execute().get('id')
                batch_upload = drive_service.new_batch_http_request()
                for json_file in os.listdir(os.getcwd() + "/temp/" + token + "_finished/"):
                    content = json.load(open(os.getcwd() + "/temp/" + token + "_finished/" + json_file, 'r'))
                    results = json.loads(content['data'])
                    pandas.DataFrame.from_dict(results).to_csv(os.getcwd() + "/temp/" + token + "_finished/" + json_file[:-5] + ".tsv", sep="\t")
                    body={'name': json_file, 'parents': [token_folder]}
                    media_body=MediaFileUpload(os.getcwd() + "/temp/" + token + "_finished/" + json_file, mimetype='text/json', resumable=False)
                    batch_upload.add(drive_service.files().create(body=body, media_body=media_body))
                    body={'name': json_file[:-5] + ".tsv", 'parents': [token_folder]}
                    media_body=MediaFileUpload(os.getcwd() + "/temp/" + token + "_finished/" + json_file[:-5] + ".tsv", mimetype='text/tsv', resumable=False)
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
            pandas.DataFrame.from_dict(results).to_csv(os.path.expanduser('~/') + output_path + "/experiments/" + token + "_finished/" + json_file[:-5] + ".tsv", sep="\t")
    #if there are unfinished resutls convert
    if(os.path.isdir(os.path.expanduser('~/') + output_path + "/experiments/" + token)):
        for json_file in os.listdir(os.path.expanduser('~/') + output_path + "/experiments/" + token):
            content = json.load(open(os.path.expanduser('~/') + output_path + "/experiments/" + token + "/" + json_file, 'r'))
            results = json.loads(content['data'])
            pandas.DataFrame.from_dict(results).to_csv(os.path.expanduser('~/') + output_path + "/experiments/" + token + "/" + json_file[:-5] + ".tsv", sep="\t")
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
