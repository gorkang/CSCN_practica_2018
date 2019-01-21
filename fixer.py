import os, shutil

def modifyDocument(prueba, document_name, old_data, new_data):
	f = open('pruebas_individuales/'+ prueba +'/'+ document_name,'r')
	filedata = f.read()
	f.close()

	newdata = filedata.replace("'"+old_data+"'","'"+new_data+"'")
	newdata = newdata.replace('"'+old_data+'"','"'+new_data+'"')

	f = open('pruebas_individuales/'+ prueba +'/'+ document_name,'w')
	f.write(newdata)
	f.close()


def main ():
	PATH = os.getcwd()
	source = PATH + '/maker/sources/jsPsych-6/plugins/'

	pruebas = next(os.walk('pruebas_individuales'))[1]
	choice = 0
	choice1 = 0
	choice2 = 0
	choice3 = 0

	for prueba in pruebas:
		plugins = next(os.walk('pruebas_individuales/'+ prueba + '/jsPsych-6/plugins'))[2]
		for plugin in plugins:
			if plugin != 'jspsych-survey-multi-choice-horizontal.js' and plugin != 'jspsych-survey-multi-choice-vertical.js' and plugin != 'jspsych-survey-text.js' and plugin != 'jspsych-instructions.js' and plugin != 'jspsych-fullscreen.js':
				os.remove(PATH + '/pruebas_individuales/' + prueba + '/jsPsych-6/plugins/' + plugin)
			elif plugin == 'jspsych-survey-text.js':
				os.remove(PATH + '/pruebas_individuales/' + prueba + '/jsPsych-6/plugins/' + plugin)
				shutil.copyfile(source + plugin, PATH + '/pruebas_individuales/' + prueba + '/jsPsych-6/plugins/' + plugin)

			if plugin == 'jspsych-survey-multi-choice1.js':
				#horizontal
				choice1+=1
				#modifyDocument(prueba, 'experiment.js', 'survey-multi-choice1', 'survey-multi-choice-horizontal')
				#modifyDocument(prueba, 'index.html', 'jsPsych-6/plugins/jspsych-survey-multi-choice1.js', 'jsPsych-6/plugins/jspsych-survey-multi-choice-horizontal.js')
				#shutil.copyfile(source + 'jspsych-survey-multi-choice-horizontal.js', PATH + '/pruebas_individuales/' + prueba + '/jsPsych-6/plugins/jspsych-survey-multi-choice-horizontal.js')
			elif plugin == 'jspsych-survey-multi-choice.js':
				#vertical
				choice+=1
				#modifyDocument(prueba, 'experiment.js', '"survey-multi-choice"', '"survey-multi-choice-vertical"')
				#modifyDocument(prueba, 'index.html', 'jsPsych-6/plugins/jspsych-survey-multi-choice.js', 'jsPsych-6/plugins/jspsych-survey-multi-choice-vertical.js')
				#shutil.copyfile(source + 'jspsych-survey-multi-choice-vertical.js', PATH + '/pruebas_individuales/' + prueba + '/jsPsych-6/plugins/jspsych-survey-multi-choice-vertical.js')
			elif plugin == 'jspsych-survey-multi-choice2.js':
				choice2+=1
			elif plugin == 'jspsych-survey-multi-choice3.js':
				choice3+=1

	print(choice)
	print(choice1)
	print(choice2)
	print(choice3)

if __name__ == '__main__' : main()
