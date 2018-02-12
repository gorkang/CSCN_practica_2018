"""Start.py setup module.
Set ups the enviorement for start.py.

This scripts requires sudo and will need a relog or even a reboot after runing.
"""
def setup():
	import subprocess
	import os

	#Used to install other requeriments
	subprocess.call("sudo apt-get install python-pip".split())

	#Pandas is used to format csv and tsv from json
	subprocess.call("sudo -H python -m pip install pandas".split())

	#Numpy is used for randomization
	subprocess.call("sudo -H python -m pip install numpy".split())

	#Gtk2 is used to copy tokens to clipboard to be pasted on the web browser
	subprocess.call("sudo -H apt-get install python-gtk2-dev".split())

	#The google python api is used to interact with drives
	subprocess.call("sudo -H python -m pip install --upgrade google-api-python-client".split())

	#Auth-httplob2 and oauth are used to comunicate with google servers
	subprocess.call("sudo -H python -m pip install --upgrade google-auth-httplib2".split())
	subprocess.call("sudo -H python -m pip install --upgrade google-oauth".split())

	#Selenium gives us controll of the web browser for pasting, starting the experiments, monitor progress and finishing the protocol
	subprocess.call("sudo -H python -m pip install -U selenium".split())

	#Docker allows us to run experimental factory isolated from the system
	subprocess.call("sudo apt-get install docker.io".split())

	#This group allows us to use docker and groups are evaluated on login, thus we need to log out and in and sometimes restart
	subprocess.call("sudo addgroup docker".split())
	user = subprocess.check_output(['who']).split()[0]
	subprocess.call(["sudo","usermod","-aG","docker", user])

	#Download chromedriver to allow comunication between
	if(not os.path.isfile('/bin/chromedriver')):
		subprocess.call(["wget", "https://chromedriver.storage.googleapis.com/2.35/chromedriver_linux64.zip"])
		subprocess.call(["unzip", "chromedriver_linux64.zip"])
		subprocess.call(["rm", "chromedriver_linux64.zip"])
		subprocess.call(["sudo", "mv", "chromedriver", os.path.expanduser('/bin')])

	print("Please log out and in.")
	exit(0)

if __name__ == '__main__':
	setup()
