import os, glob

PATH = os.getcwd()
extension = 'csv'
first = []

os.chdir(PATH+"/Downloads")
result = [i for i in glob.glob('*.{}'.format(extension))]

for csv in result:
    with open(PATH+'/Downloads/'+csv) as f:
        first.append(f.readline())

# Si la prueba no retorna la respuesta común, imprimiremos su respuesta a un archivo
# Respuesta comun:
# "success","trial_type","trial_index","time_elapsed","internal_node_id","view_history","rt","trialid","responses"
for i in range(len(first)):
	if first[i].rstrip('\n') != '"success","trial_type","trial_index","time_elapsed","internal_node_id","view_history","rt","trialid","responses"':
	    print(result[i])
	    print(first[i])