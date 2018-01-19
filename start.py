from __future__ import print_function
import subprocess
import webbrowser
import httplib2
import signal
import time
import gtk
import csv
import os
import io

from apiclient import errors
from apiclient import discovery
from apiclient.http import MediaFileUpload
from apiclient.http import MediaIoBaseDownload
from oauth2client import client
from oauth2client import tools
from oauth2client.file import Storage

try:
    import argparse
    flags = argparse.ArgumentParser(parents=[tools.argparser]).parse_args()
except ImportError:
    flags = None

def get_credentials():
    """Gets valid user credentials from storage.

    If nothing has been stored, or if the stored credentials are invalid,
    the OAuth2 flow is completed to obtain the new credentials.

    Returns:
        Credentials, the obtained credential.
    """
    home_dir = os.path.expanduser('~')
    credential_dir = os.path.join(home_dir, '.credentials')
    if not os.path.exists(credential_dir):
        os.makedirs(credential_dir)
    credential_path = os.path.join(credential_dir,'bayes_experiment.json')
    store = Storage(credential_path)
    credentials = store.get()
    if not credentials or credentials.invalid:
        flow = client.flow_from_clientsecrets(CLIENT_SECRET_FILE, SCOPES)
        flow.user_agent = APPLICATION_NAME
        if flags:
            credentials = tools.run_flow(flow, store, flags)
        else: # Needed only for compatibility with Python 2.6
            credentials = tools.run(flow, store)
        print('Storing credentials to ' + credential_path)
    return credentials

filename = "tokens.tsv"
imagename =  "experiments.tar"

if(not os.path.isfile("experiment.cfg")):
    while(True):
        option = raw_input("Use google drive?(Y,n) ")
        if(option in ["n","N","no","No"]):
            usingGDrive = False
            config_file = open("experiment.cfg","w")
            config_file.write("usingGDrive: false")
            config_file.close()
            break
        elif(option in ["","y","Y","yes","Yes"]):
            credentials = get_credentials()
            http = credentials.authorize(httplib2.Http())
            drive_service = discovery.build('drive', 'v3', http=http)
            #Create folder for tokens.tsv
            folder_id = drive_service.files().create(body={'name': 'Bayes_experiment', 'mimeType': 'application/vnd.google-apps.folder'}, fields='id').execute().get('id')
            #Save drive choice and file id
            config_file = open("experiment.cfg","w")
            config_file.write("usingGDrive: true\n")
            config_file.write("folderID: " + folder_id + "\n")
            config_file.close()
            usingGDrive = True
            break
elif(open("experiment.cfg","r").readline() == "usingGDrive: false\n"):
    usingGDrive = False
elif(open("experiment.cfg","r").readline() == "usingGDrive: true\n"):
    credentials = get_credentials()
    http = credentials.authorize(httplib2.Http())
    drive_service = discovery.build('drive', 'v3', http=http)
    #load folder id
    folder_id = open("experiment.cfg","r").readlines()[1][10:-1]
    tokens_id = open("experiment.cfg","r").readlines()[2][11]
    usingGDrive = True
else:
    print("Redownload experiment to configure correctly")
    exit()

#Control+C handler
def stop_handler(signumber, frame):
    #get tokens status from container
    token_list = subprocess.check_output(["docker", "exec", container, "expfactory", "users", "--list"]).split()
    if((token + "[finished]") in token_list):
        #backup data
        subprocess.call(["docker", "cp", container + ":/scif/data/expfactory/" + token + "_finished", "experiments")
        print("The experiment finished successfully.")
    elif((token + "[active]") in token_list):
        subprocess.call(["docker", "cp", container + ":/scif/data/expfactory/", "experiments"])
        print("The experiment was NOT finished.")
    else:
        print("Error: unknown token.")
    subprocess.call(["docker", "stop", container])
    subprocess.call(["docker", "rm", container])
    subprocess.call(["docker", "rmi", image, "--force"])
    exit()

#Set up experiment
if(not os.path.isfile(imagename)):
    if(os.path.isfile("Dockerfile")):
        os.remove("Dockerfile")
    if(os.path.isfile("startscript.sh")):
        os.remove("startscript.sh")
    subprocess.call(("docker run -v " + os.getcwd() + ":/data vanessa/expfactory-builder build /data/ansiedad_matematica /data/comprension_lectora /data/habilidad_matematica /data/memoria_funcional /data/rotacion_mental /data/crtnum /data/crt_verbal /data/graph_literacy /data/matrices /data/numeracy /data/bayes").split())
    print("Building...")
    pre_image = subprocess.check_output("docker build --quiet --squash .".split())[7:-1]
    container = subprocess.check_output(["docker", "run", "-d", pre_image, "start"])[:-1]
    file = open(filename,'w')
    file.write(subprocess.check_output(["docker", "exec", container, "expfactory", "users", "--new", str(input("Input number of runs:"))]))
    file.close()
    print("Tsv generated.")
    #subprocess.call(randomizer)
    subprocess.call(["docker", "cp", container + ":/scif/data/expfactory/", os.getcwd()])
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
        config_file.write("tokens_id: " + tokens_id)
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
    tokens_id = open("experiment.cfg","r").readlines()[2][11:]
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
for row in tsv:
    if(i == user_id):
        print(row[1])
        if(row[1][-8:-1] == "revoked"):
            while(True):
                option = raw_input("Token is already taken, overwrite?:(y,N)")
                if(option in ["","n","N","no","No"]):
                    exit()
                elif(option in ["y","Y","yes","Yes"]):
                    backup_number = 1
                    while(True):
                        if(os.path.isfile("backup/" + row[1][:-9] + "backup" + str(backup_number))):
                            backup_number += 1
                        else:
                            subprocess.call(["mkdir","backup"])
                            subprocess.call(["mv","expfactory/" + row[1][:-9],"backup/" + row[1][:-9] + "backup" + str(backup_number)])
                            break
                    break
        token = row[1][:-9]
        print(token)
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
    clipboard = gtk.clipboard_get()
    clipboard.set_text(token)
    clipboard.store()
    print("Token copied to clipboard.")
    signal.signal(signal.SIGINT, stop_handler)
    print("Starting experiment.")
    container = subprocess.check_output(["docker", "run", "--tmpfs", "/scfi/data/expfactory/" , "-d", "-p", "80:80", image,"--headless", "--no-randomize", "--experiments",token_experiments, "start"])[:-1]
    time.sleep(10)
    subprocess.call(["docker", "exec", container, "mkdir", "/scif/data/expfactory/" + token])
    print("Experiment started, wait until browser is open and paste token, press Control+C once the experiment ends.")
    webbrowser.open_new("http://localhost")
    while(True):
        time.sleep(1000)
