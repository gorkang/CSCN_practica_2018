import subprocess
import webbrowser
import signal
import pygtk
import time
import gtk
import csv
import os

filename = "tokens.tsv"
imagename =  "experiments.tar"

if(not os.path.isfile("./dropbox_uploader.sh")):
    print("Descargando modulo faltante.")
    subprocess.call("curl https://raw.githubusercontent.com/andreafabrizi/Dropbox-Uploader/master/dropbox_uploader.sh -o dropbox_uploader.sh".split())
    subprocess.call("chmod +x dropbox_uploader.sh".split())

def stop_handler(signumber, frame):
    token_list = subprocess.check_output(["docker", "exec", container, "expfactory", "users", "--list"]).split()
    subprocess.call(["docker", "stop", container])
    if((token + "[active]") in token_list):
        print("The experiment was NOT finished.")
    else:
        print("The experiment finished successfully.")
        subprocess.call(["docker", "rm", container])
        subprocess.call(["docker", "rmi", image, "--force"])
        os.remove("run_incomplete")
    exit()

if(not os.path.isfile(imagename) or not os.path.isfile(filename)):
    #subprocess.call(["./dropbox_uploader.sh","download",imagename + ".gz"])
    #subprocess.call(["gzip","-d", imagename + ".gz"])
    subprocess.call(["./dropbox_uploader.sh","download",filename])
if(not os.path.isfile(imagename) or  not os.path.isfile(filename)):
    if(os.path.isfile("Dockerfile")):
        os.remove("Dockerfile")
    if(os.path.isfile("startscript.sh")):
        os.remove("startscript.sh")
    subprocess.call(("docker run -v " + os.getcwd() + ":/data vanessa/expfactory-builder build /data/ansiedad_matematica /data/comprension_lectora /data/habilidad_matematica /data/memoria_funcional /data/rotacion_mental /data/crtnum /data/crt_verbal /data/graph_literacy /data/matrices /data/numeracy /data/bayes").split())
    print("Compiling...")
    image = subprocess.check_output("docker build --no-cache --quiet -t expfactory/experiments .".split())[7:-1]
    container = subprocess.check_output(["docker", "run", "-d", image, "-v", os.path.realpath("") + "data:/scif/data/", "start"])[:-1]
    file = open(filename,'w')
    file.write(subprocess.check_output(["docker", "exec", container, "expfactory", "users", "--new", str(input("Input number of runs:"))]))
    file.close()
    print "Tsv generated."
    #subprocess.call(randomizer)
    subprocess.call(["docker", "cp", filename, container + ":/scif/apps/bayes/" + filename])
    image = subprocess.check_output(["docker", "commit", container])[7:-1]
    subprocess.call(["docker", "stop", container])
    print("Creating experiments.tar.")
    subprocess.call(["docker", "save", "--output", imagename, image])
    print("Compresing.")
    #subprocess.call(["gzip", "--fast", "-k", imagename])
    #subprocess.call(["./dropbox_uploader.sh","upload",imagename + ".gz", ""])
    subprocess.call(["./dropbox_uploader.sh","upload",filename, ""])
print("Loading...")
image = subprocess.check_output(["docker", "load", "--input", imagename])[24:-1]
if(os.path.isfile("run_incomplete")):
    incomplete_run = open("run_incomplete").read()
    token = incomplete_run.split()[0]
    token_experiments = incomplete_run.split()[1]
    print("Last run was NOT completed, restarting.")
else:
    subprocess.call(["./dropbox_uploader.sh","download",filename])
    tsv = csv.reader(open(filename,'r'),delimiter="\t")
    token = ""
    rows = []
    for row in tsv:
        if(row[1][-7:-1] == "active" and token == ""):
            token = row[1][:-8]
            token_experiments = "bayes,ansiedad_matematica,comprension_lectora,crtnum,crt_verbal,graph_literacy,habilidad_matematica,matrices,memoria_funcional"
            rows.append([row[0], token + "[revoked]"])
        else:
            rows.append(row)

    file = open("tokens.tsv","wb")
    tsv = csv.writer(file,delimiter="\t")
    tsv.writerows(rows)
    file.close()
    subprocess.call(["./dropbox_uploader.sh","upload",filename,"."])
if(token == ""):
    print "Study ended"
else:
    clipboard = gtk.clipboard_get()
    clipboard.set_text(token)
    clipboard.store()
    print("Token copied to clipboard.")
    error_file = open("run_incomplete","w")
    error_file.write(token + " " + token_experiments)
    error_file.close()
    signal.signal(signal.SIGINT, stop_handler)
    print("Starting experiment.")
    container = subprocess.check_output(["docker", "run", "-d", "-p", "80:80", "-v", os.path.realpath("") + "data:/scif/data/",image, "--headless", "--no-randomize", "--experiments",token_experiments, "start"])[:-1]
    print("Experiment started, press Control+C once it's ended.")
    webbrowser.open_new("http://localhost")
    while(True):
        time.sleep(1000)
