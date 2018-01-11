import subprocess
import csv
import os

filename = "tokens.tsv"
subprocess.call(["./dropbox_uploader.sh","download",filename])

tsv = csv.reader(open(filename,'r'),delimiter="\t")
if(tsv.next()[0] != "DATABASE"):
    container = subprocess.check_output(["docker", "run", "-d", "expfactory/experiments", "start"])
    file = open(filename,'w')
    file.write(subprocess.check_output(["docker", "exec", container[:-1], "expfactory", "users", "--new", "80"]))
    file.close()
    print "tsv generado"
    subprocess.call(["docker", "stop", container[:-1]])
    tsv = csv.reader(open(filename,'r'),delimiter="\t")
    #subprocess.call(randomizer)
token = ""
rows = []
for row in tsv:
    if(row[1][-7:-1] == "active" and token == ""):
        token = row[1][:-8]
        #token_experiments = row[2]
        token_experiments = ""
        rows.append([row[0], token + "[revoked]"])
    else:
        rows.append(row)
if(token == ""):
    print "Study ended"
else:
    file = open("tokens.tsv","wb")
    tsv = csv.writer(file,delimiter="\t")
    tsv.writerows(rows)
    file.close()
    subprocess.call(["./dropbox_uploader.sh","upload",filename,"."])
    print "Copy this token: " + container[:-1]
    subprocess.call(["docker","rm","experiments"])
    subprocess.call(["docker", "run", "-p", "80:80", "--name", "experiments", "-v", os.path.realpath("") + "data:/scif/data/", "expfactory/experiments", "--headless", "--no-randomize", "--experiments",token_experiments, "start"])
