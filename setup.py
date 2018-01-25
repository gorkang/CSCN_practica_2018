import subprocess
import os

subprocess.call("sudo apt-get install python-pip".split())
subprocess.call("sudo -H python -m pip install pandas".split())
subprocess.call("sudo -H apt-get install python-gtk2-dev".split())
subprocess.call("sudo -H python -m pip install google-api-python-client".split())
subprocess.call("sudo -H python -m pip install google-auth-httplib2".split())
subprocess.call("sudo -H python -m pip install google-oauth".split())
subprocess.call("sudo -H python -m pip install -U selenium".split())
subprocess.call("sudo apt-get install docker.io".split())
subprocess.call("sudo addgroup docker".split())
user = subprocess.check_output(['who']).split()[0]
subprocess.call(["sudo","usermod","-aG","docker", user])
#Download chromedriver
if(not os.path.isfile('/bin/chromedriver')):
	subprocess.call(["wget", "https://chromedriver.storage.googleapis.com/2.35/chromedriver_linux64.zip"])
	subprocess.call(["unzip", "chromedriver_linux64.zip"])
	subprocess.call(["rm", "chromedriver_linux64.zip"])
	subprocess.call(["sudo", "mv", "chromedriver", os.path.expanduser('/bin')])
print("Please log out and in.")
exit(0)
