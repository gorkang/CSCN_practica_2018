#Takes parsed json to csv or tsv, reads tokens
import csv
#For reading arguments from command line
import sys
#Deals with files and directories
import os

csv_list = list(csv.reader(open('small_exp.csv', 'r'), delimiter=','))
experiments = []
for file_name in os.listdir(os.getcwd()):
    if(os.path.isdir(file_name)):
        if(os.path.isfile(os.getcwd() + "/" + file_name + "/index.html")):
            experiments.append(file_name)

if(len(csv_list) - 1 > len(experiments)):
    print('No hay suficientes experimentos en la carpeta')
    exit(1)
else:
    shuffle = False
    shuffle_number = 0
    exp_list = "    var experiments = '"
    for exp_number,exp_name in csv_list[1:]:
        if(exp_name in experiments):
            if(shuffle):
                exp_list += str(shuffle_number) + ") + ',"
                shuffle_number += 1
                shuffle = False
            experiments.remove(exp_name)
            if(exp_list[-1] != "'" and exp_list[-1] != ","):
                exp_list += "," + exp_name
            else:
                exp_list += exp_name
        elif(exp_name == '' and  len(experiments) > 0):
            if(shuffle):
                shuffle_number += 1
            else:
                exp_list += ",' + experiments_random.slice(" + str(shuffle_number) + ","
            shuffle = True

        else:
            print("Experimento desconocido en linea " + str(exp_number) + ".")
            exit(1)
    if(exp_list[-1] != "]"):
                exp_list += "';\n"
random_exp_list = "    var experiments_random = shuffle(" + str(experiments) + ");\n"

html_list = open('index.html', 'r').readlines()
for line in html_list:
    if("var experiments =" in line):
        html_list[html_list.index(line)] = exp_list
    elif("var experiments_random =" in line):
        html_list[html_list.index(line)] = random_exp_list
index_file = open("index.html",'wb')
index_file.writelines(html_list)
index_file.close()
