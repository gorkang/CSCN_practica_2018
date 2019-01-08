import shutil, os, math

def createFolder(directory):
	try:
		if not os.path.exists(directory):
			os.makedirs(directory)
	except OSError:
		print ('Error: Creating directory. ' + directory)

def writeExperiment(file_name, questions, answers=None):
	PATH = os.getcwd()
	f = open(PATH + '/'+ file_name + '/experiment.js', 'r')
	content = f.readlines()
	f.close()

	if (not content[3].startswith(' * The experiment ')):

		content.insert(3,' * The experiment ' + " ".join(file_name.split('_')).title() + ' \n')
		content.insert(30, "    pages: ['<p><left><b><big>" + " ".join(file_name.split('_')).title() + "</big></b><br />'+\n" )
		content.insert(31, "    'Instruccions' +")

		for i in range(len(questions)):
			content.insert(43+(7*i), "var question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +" = {\n")
			content.insert(44+(7*i), "  type: 'survey-multi-choice1',\n")
			content.insert(45+(7*i), "  questions: [{prompt: "+'"'+"<div class='justified'>" + questions[i] + "</div>"+'"'+", options: ['"+ "', '".join(answers[i]) +"'], required: true, horizontal: true}],\n")
			content.insert(46+(7*i), "  data: {trialid: 'Question_"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +"'}\n")
			content.insert(47+(7*i), "};\n")
			content.insert(48+(7*i), "questions_experiment.push(question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +");\n")
			content.insert(49+(7*i), "\n")

		f = open(PATH + '/'+ file_name + '/experiment.js', "w")
		content = "".join(content)
		f.write(content)
		f.close()

def writeConfig(file_name):
	PATH = os.getcwd()
	f = open(PATH + '/'+ file_name + '/config.json', 'r')
	content = f.readlines()
	f.close()

	if (not content[2].startswith('    "instructions":"Responder preguntas de')):

		content.insert(2, '    "instructions":"Responder preguntas de '+ file_name +'_experiment",\n')
		content.insert(6, '    "exp_id": "'+ file_name +'_experiment",')
		content.insert(7, '    "name": "'+ file_name +'_experiment",')

		f = open(PATH + '/'+ file_name + '/config.json', "w")
		content = "".join(content)
		f.write(content)
		f.close()

def writeIndex(file_name):
	PATH = os.getcwd()
	f = open(PATH + '/'+ file_name + '/index.html', 'r')
	content = f.readlines()
	f.close()

	if (not content[6].startswith('  <title>')):

		content.insert(6, '  <title>' + " ".join(file_name.split('_')).title() + '</title>\n')
		content.insert(63, "                      name: '" + file_name + "_results'")
		content.insert(66, "                    jsPsych.data.get().localSave('csv', '" + file_name + "_results.csv');")

		f = open(PATH + '/'+ file_name + '/index.html', "w")
		content = "".join(content)
		f.write(content)
		f.close()

	

def main():
	PATH = os.getcwd()
	data_file = PATH +'/data.txt'
	file = open(data_file, 'r') 

	# set actual state (read file name, read questions, read answers)
	state = 1
	questions=[]
	answers=[]
	answer_list = []
	answer_type_selected=False
	answers_cont = 0


	for line in file:
		if line[0] == '#':
			continue
		elif line[0] == '-':
			if state == 1:
				state = 2
			elif state == 2:
				state = 3
			elif state == 3:
				state = 4
			else:
				state = 0
		elif line != '\n':
			if state == 2:
				file_name = line[0:-1]
				# copy basic source to new folder
				try:
					shutil.copytree(PATH + '/sources', PATH + '/'+ file_name)
				except:
					pass
			if state == 3:
				questions.append(line[0:-1])
			if state == 4:
				if (not answer_type_selected):
					answer_type_selected = True
					if line == "Yes\n" or line == "yes\n":
						same_answers = True
					elif line == "No\n" or line == "no\n":
						same_answers = False
					continue
				if (same_answers):
					if answers_cont == 0:
						answers_cont = int(line[0:-1])
					else:
						answers.append(line[0:-1])
				else:
					if answers_cont == 0:
						answers_cont = int(line[0:-1])
						answers = []
					else:
						answers_cont-=1
						answers.append(line[0:-1])
						if answers_cont == 0:
							answer_list.append(answers)
	if same_answers:
		for i in questions:
			answer_list.append(answers)

	writeExperiment(file_name, questions, answer_list)
	writeConfig(file_name)
	writeIndex(file_name)

main()


