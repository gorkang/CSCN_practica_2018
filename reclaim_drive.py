from __future__ import print_function

try:
    from apiclient import discovery
except ImportError:
    print("Google python api not installed")
    exit(1)

try:
    from google.oauth2 import service_account
except ImportError:
    print("Google python oath2 plugin not installed")
    exit(1)

config_file_name = "experiment.cfg"

SCOPES = ['https://www.googleapis.com/auth/drive.file']
SERVICE_ACCOUNT_FILE = 'service_secret.json'


if(open(config_file_name, "r").readline() == "usingGDrive: true\n"):
    credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    drive_service = discovery.build('drive', 'v3', credentials=credentials)
    # load folder id
    folder_id = open(config_file_name, "r").readlines()[1][10:-1]
    email = str(raw_input("Input drive email:"))
    drive_service.permissions().create(fileId=folder_id,transferOwnership=True,body={'type': 'user', 'role': 'owner','emailAddress': email},fields='id').execute()
else:
    exit(1)
