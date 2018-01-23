from __future__ import print_function
import subprocess
import webbrowser
import signal
import pandas
import numpy
import json
import time
import gtk
import csv
import sys
import os
import io

try:
    import pip
except ImportError:
    subprocess.call("sudo apt-get install python-pip".split())
    import pip

try:
    import httplib2
except ImportError:
	pip.main(['install','httplib2'])
	import httplib2

try:
    from apiclient import errors
    from apiclient import discovery
    from apiclient.http import MediaFileUpload
    from apiclient.http import MediaIoBaseDownload
    from oauth2client import client
    from oauth2client import tools
    from oauth2client.file import Storage
except ImportError:
	pip.main(['install','--upgrade','google-api-python-client'])
	from apiclient import errors
	from apiclient import discovery
	from apiclient.http import MediaFileUpload
	from apiclient.http import MediaIoBaseDownload
	from oauth2client import client
	from oauth2client import tools
	from oauth2client.file import Storage

try:
	from google.oauth2 import service_account
except ImportError:
	pip.main(['install','google-auth-httplib2'])
	pip.main(['install','google-oauth'])
	from google.oauth2 import service_account

try:
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.common.keys import Keys
    from selenium.webdriver.chrome.options import Options
except ImportError:
    pip.main(['install','-U','selenium'])
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.common.keys import Keys
    from selenium.webdriver.chrome.options import Options

try:
	subprocess.call("docker --version".split())
except OSError:
	subprocess.call("sudo apt-get install docker.io".split())
	subprocess.call("sudo addgroup docker".split())
	user = subprocess.check_output(['who']).split()[0]
	subprocess.call(["sudo","usermod","-aG","docker", user])
	subprocess.call(["su", user])

SCOPES = ['https://www.googleapis.com/auth/drive.file']
SERVICE_ACCOUNT_FILE = 'service_secret.json'

#Download chromedriver
if(not os.path.isfile('/bin/chromedriver')):
     subprocess.call(["wget", "https://chromedriver.storage.googleapis.com/2.35/chromedriver_linux64.zip"])
     subprocess.call(["unzip", "chromedriver_linux64.zip"])
     subprocess.call(["rm", "chromedriver_linux64.zip"])
     subprocess.call(["sudo", "mv", "chromedriver", os.path.expanduser('/bin')])

filename = "tokens.tsv"
imagename =  "experiments.tar"

#Check for different status of the experiment.cfg file
if(not os.path.isfile("experiment.cfg")):
    if(len(sys.argv) != 2):
        print("Arguments for first run are [output_path]\n\n Always start with ~/ for home folder.")
        exit(1)
    output_path = sys.argv[1]
    print(output_path)
    if(output_path.split("/")[1] != "home"):
        print("Arguments for first run are [output_path]\n\n Always start with ~/ for home folder.")
        exit(1)
    output_path = "/".join(output_path.split("/")[3:])
    if(not os.path.isdir(output_path)):
        subprocess.call(["mkdir","-p", os.path.expanduser('~/') + output_path])
    while(True):
        option = raw_input("Use google drive?(Y,n) ")
        if(option in ["n","N","no","No"]):
            usingGDrive = False
            config_file = open("experiment.cfg","w")
            config_file.write("usingGDrive: false\n")
            config_file.close()
            break
        elif(option in ["","y","Y","yes","Yes"]):
            #Create google service account for storing tokens.tsv
            credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
            drive_service = discovery.build('drive', 'v3',credentials=credentials)
            #Create folder for tokens.tsv
            folder_id = drive_service.files().create(body={'name': 'Bayes_experiment', 'mimeType': 'application/vnd.google-apps.folder'}, fields='id').execute().get('id')
            #Save drive choice and file id
            config_file = open("experiment.cfg","w")
            config_file.write("usingGDrive: true\n")
            config_file.write("folderID: " + folder_id + "\n")
            config_file.close()
            usingGDrive = True
            break
    config_file = open("experiment.cfg","a")
    config_file.write("output_path: " + output_path + "\n")
    config_file.close()
elif(open("experiment.cfg","r").readline() == "usingGDrive: false\n"):
    usingGDrive = False
    output_path = open("experiment.cfg","r").readlines()[1][13:]
    if(not os.path.isdir(output_path)):
        subprocess.call(["mkdir","-p", os.path.expanduser('~/') + output_path])
elif(open("experiment.cfg","r").readline() == "usingGDrive: true\n"):
    credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    drive_service = discovery.build('drive', 'v3',credentials=credentials)
    #load folder id
    folder_id = open("experiment.cfg","r").readlines()[1][10:-1]
    tokens_id = open("experiment.cfg","r").readlines()[2][11:-1]
    output_path = open("experiment.cfg","r").readlines()[3][13:]
    usingGDrive = True
    if(not os.path.isdir(output_path)):
        subprocess.call(["mkdir","-p", os.path.expanduser('~/') + output_path])
else:
    print("Redownload experiment to configure correctly")
    exit()

#Set up experiment if tar is not found
if(not os.path.isfile(imagename)):
    if(os.path.isfile("Dockerfile")):
        os.remove("Dockerfile")
    if(os.path.isfile("startscript.sh")):
        os.remove("startscript.sh")
    subprocess.call(("docker run -v " + os.getcwd() + ":/data vanessa/expfactory-builder build /data/ansiedad_matematica /data/comprension_lectora /data/habilidad_matematica /data/memoria_funcional /data/rotacion_mental /data/crtnum /data/crt_verbal /data/graph_literacy /data/matrices /data/numeracy /data/bayes").split())
    print("Building...")
    pre_image = subprocess.check_output("docker build --quiet .".split())[7:-1]
    container = subprocess.check_output(["docker", "run", "-d", pre_image, "start"])[:-1]
    file = open(filename,'w')
    file.write(subprocess.check_output(["docker", "exec", container, "expfactory", "users", "--new", str(input("Input number of runs:"))]))
    file.close()
    print("Tsv generated.")
    #subprocess.call(randomizer)
    subprocess.call(["docker", "cp", filename, container + ":/scif/apps/bayes"])
    #commit breaks things image = subprocess.check_output(["docker", "commit", container])[7:-1]
    subprocess.call(["docker", "stop", container])
    print("Creating experiments.tar...")
    subprocess.call(["docker", "save", "--output", imagename, pre_image])
    print("Cleaning...")
    #   subprocess.call(["docker", "rmi", image, "--force"])
    os.remove("Dockerfile")
    os.remove("startscript.sh")
    subprocess.call(["docker", "rmi", pre_image, "--force"])
    if(usingGDrive):
        #Upload tsv
        file_metadata = {'name': 'tokens.tsv','parents': [folder_id]}
        media = MediaFileUpload('tokens.tsv', mimetype='text/tsv', resumable=False)
        tokens_id = drive_service.files().create(body=file_metadata, media_body=media, fields='id').execute().get("id")
        config_file = open("experiment.cfg","a")
        config_file.write("tokens_id: " + tokens_id + "\n")
        config_file.close()
    while(True):
        option = raw_input("Start experiment?(Y/n) ")
        if(option in ["n","N","no","No"]):
            exit()
        elif(option in ["","y","Y","yes","Yes"]):
            break


#Load image from file
print("Loading...")
image = subprocess.check_output(["docker", "load", "--input", imagename])[-65:-53]
while(True):
    option = raw_input("Input user id:")
    try:
        user_id = int(option)
        break
    except ValueError:
        pass

#Get token for new experiment
if(usingGDrive):
    tokens_id = open("experiment.cfg","r").readlines()[3][11:-1]
    #Download tokens.tsv from google drive
    request = drive_service.files().get_media(fileId=tokens_id)
    fh = io.FileIO(filename, 'wb')
    downloader = MediaIoBaseDownload(fh, request)
    done = False
    while done is False:
        status, done = downloader.next_chunk()
    fh.close()
tsv = csv.reader(open(filename,'r'),delimiter="\t")
token = ""
rows = []
i = 0
#Find token chossen in token.tsv and check usability
for row in tsv:
    if(i == user_id):
        if(row[1][-8:-1] == "revoked"):
            while(True):
                option = raw_input("Token is already taken, overwrite?:(y,N)")
                if(option in ["","n","N","no","No"]):
                    exit()
                elif(option in ["y","Y","yes","Yes"]):
                    #Create backup and reuse token
                    backup_number = 1
                    while(True):
                        if(os.path.isdir(os.path.expanduser('~/') + output_path + "/backup/" + row[1][:-9] + "backup" + str(backup_number))):
                            backup_number += 1
                        elif(os.path.isdir(os.path.expanduser('~/') + output_path + "/experiments/" + row[1][:-9] )):
                            subprocess.call(["mkdir","-p",os.path.expanduser('~/') + output_path + "/backup/"])
                            subprocess.call(["mv",os.path.expanduser('~/') + output_path + "/experiments/" + row[1][:-9],os.path.expanduser('~/') + output_path + "/backup/" + row[1][:-9] + "backup/" + str(backup_number)])
                            break
                        elif(os.path.isdir(os.path.expanduser('~/') + output_path + "/experiments/" + row[1][:-9] + "_finished")):
                            option = raw_input("Token was already finished, overwrite?:(y,N)")
                            if(option in ["","n","N","no","No"]):
                                exit()
                            elif(option in ["y","Y","yes","Yes"]):
                                subprocess.call(["mkdir","-p",os.path.expanduser('~/') + output_path + "/backup/"])
                                subprocess.call(["mv",os.path.expanduser('~/') + output_path + "/experiments/" + row[1][:-9] + "_finished",os.path.expanduser('~/') + output_path + "/backup/" + row[1][:-9] + "backup/" + str(backup_number)])
                                break
                    break
        token = row[1][:-9]
        token_experiments = "bayes,ansiedad_matematica,comprension_lectora,crtnum,crt_verbal,graph_literacy,habilidad_matematica,matrices,memoria_funcional"
        rows.append([row[0], token + "[revoked]"])
    else:
        rows.append(row)
    i += 1

file = open("tokens.tsv","wb")
tsv = csv.writer(file,delimiter="\t")
tsv.writerows(rows)
file.close()
if(usingGDrive):
    file_metadata = {'name': 'tokens.tsv'}
    media = MediaFileUpload('tokens.tsv', mimetype='text/tsv', resumable=False)
    drive_service.files().update(fileId=tokens_id, body=file_metadata,media_body=media).execute()

#Check if an active token was found
if(token == ""):
    print("Study ended or id not found")

#Start container, upload used token and copy data to container
else:
    #Store defuatl keymap to default
    subprocess.call(["xmodmap","-pke"],stdout=open("default","w"))
    clipboard = gtk.clipboard_get()
    clipboard.set_text(token)
    clipboard.store()
    print("Token copied to clipboard.")
    print("Starting experiment.")
    container = subprocess.check_output(["docker", "run", "--tmpfs", "/scfi/data/expfactory/" , "-d", "-p", "80:80", image,"--headless", "--no-randomize", "--experiments",token_experiments, "start"])[:-1]
    time.sleep(10)
    subprocess.call(["docker", "exec", container, "mkdir", "/scif/data/expfactory/" + token])
    print("Experiment started.")
    chrome_options = Options()
    #chrome_options.add_argument("--kiosk")
    chrome_options.add_argument("--disable-infobars")
    driver = webdriver.Chrome(chrome_options=chrome_options)
    driver.get("http://localhost/")
    wait = WebDriverWait(driver, 10)
    element = wait.until(EC.element_to_be_clickable((By.ID, 'token')))
    tokenField = driver.find_element_by_id("token")
    tokenField.send_keys(token)
    print("write ready")
    driver.fullscreen_window()
    #Block keys with file block_keys
    #subprocess.call(["xmodmap", "block_keys"])
    buttonNext = driver.find_element_by_xpath("//button[1]")
    buttonNext.click()
    print("button pressed")
    urlAddress = driver.current_url
    print(urlAddress)
    while (not driver.current_url == "http://localhost/finish"):
        time.sleep(1)
        if not urlAddress == driver.current_url:
            if(urlAddress != "http://localhost/finish"):
                subprocess.call(["docker", "cp", container + ":/scif/data/expfactory/"  + token, os.path.expanduser('~/') + output_path + "/experiments"])
            urlAddress = driver.current_url
            print(urlAddress)
    #Restore default keymap to default twice?
    subprocess.call(["xmodmap","default"])
    subprocess.call(["xmodmap","default"])
    subprocess.call(["rm", "default"])
    #get tokens status from container
    token_list = subprocess.check_output(["docker", "exec", container, "expfactory", "users", "--list"]).split()
    if((token + "[finished]") in token_list):
        #backup data
        subprocess.call(["rm", "-r", os.path.expanduser('~/') + output_path + "/experiments/" + token])
        subprocess.call(["docker", "cp", container + ":/scif/data/expfactory/" + token + "_finished", os.path.expanduser('~/') + output_path + "/experiments"])
        print("The experiment finished successfully.")
    elif((token + "[active]") in token_list):
        print("The experiment was NOT finished.")
    else:
        print("Error: unknown token.")
    if(os.path.isdir(os.path.expanduser('~/') + output_path + "/experiments/" + token + "_finished")):
        for json_file in os.listdir(os.path.expanduser('~/') + output_path + "/experiments/" + token + "_finished"):
            content = json.load(open(os.path.expanduser('~/') + output_path + "/experiments/"  + token + "_finished/" + json_file, 'r'))
            results = json.loads(content['data'])
            pandas.DataFrame.from_dict(results).to_csv(os.path.expanduser('~/') + output_path + "/experiments/" + token + "_finished/" + json_file[:-5] + ".tsv", sep="\t")
    if(os.path.isdir(os.path.expanduser('~/') + output_path + "/experiments/" + token)):
        for json_file in os.listdir(os.path.expanduser('~/') + output_path + "/experiments/" + token):
            content = json.load(open(os.path.expanduser('~/') + output_path + "/experiments/" + token + "/" + json_file, 'r'))
            results = json.loads(content['data'])
            pandas.DataFrame.from_dict(results).to_csv(os.path.expanduser('~/') + output_path + "/experiments/" + token + "/" + json_file[:-5] + ".tsv", sep="\t")

    subprocess.call(["docker", "stop", container])
    subprocess.call(["docker", "rm", container])
    subprocess.call(["docker", "rmi", image, "--force"])
    driver.close()
    exit()
