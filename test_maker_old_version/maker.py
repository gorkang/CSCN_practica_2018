import shutil, os, math

def writeExperiment(file_name, instructions, questions, fullscreen_mode=False):
	PATH = os.getcwd()
	f = open(PATH + '/'+ file_name + '/experiment.js', 'r')
	content = f.readlines()
	f.close()

	breaker = 0

	# inicio documento en linea 19
	document_actual_line = 19

	plugins = {
		"multi_choice_horizontal_question":"jspsych-survey-multi-choice-horizontal",
		"multi_choice_vertical_question":"jspsych-survey-multi-choice-vertical",
		"text_question":"jspsych-survey-text",
		"number_question":"jspsych-survey-text-number",
	}


	#if (not content[3].startswith(' * The experiment ')):
	#	content.insert(3,' * The experiment ' + " ".join(file_name.split('_')).title() + ' \n')

	# ************* es la unica diferencia entre instruction y question, podria cambiarse el código para hacerlo mas corto

	# Por cada conjunto de preguntas hay una instruccion
	for actual_int in range(len(instructions)):
		# creamos la lista de preguntas temporal
		content.insert(document_actual_line + 0, "questions_experiment = [];    //temporal timeline\n")
		content.insert(document_actual_line + 1, "\n")
		document_actual_line += 2

		content.insert(document_actual_line + 0, "var instruction_screen_experiment = {\n")
		content.insert(document_actual_line + 1, "    type: 'instructions',\n")
		# *************
		content.insert(document_actual_line + 2, "    pages: ['<p><left><b><big>" + instructions[actual_int]["title"] + "</big></b><br />'+\n" )
		content.insert(document_actual_line + 3, "    '" + instructions[actual_int]["instruction"] + "' +'</p>'],\n")
		# *************
		content.insert(document_actual_line + 4, "    data:{trialid: 'Screen_WM'},\n")
		content.insert(document_actual_line + 5, "    show_clickable_nav: true,\n")
		content.insert(document_actual_line + 6, "    on_trial_start: function(){\n")
		content.insert(document_actual_line + 7, "        bloquear_enter = 0;\n")
		content.insert(document_actual_line + 8, "    }\n")
		content.insert(document_actual_line + 9, "};\n")
		content.insert(document_actual_line + 10, "\n")
		document_actual_line += 11

		if instructions[actual_int] != instructions[-1]:
			breaker = instructions[actual_int + 1]["questions_cont"] - 1

		for i in range(instructions[actual_int]["questions_cont"],len(questions)):

			content.insert(document_actual_line + 0, "var question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +" = {\n")
			# actual question plugin:
			content.insert(document_actual_line + 1, "  type: '"+ plugins[questions[i]["type"]][8:] +"',\n")
			# *************
			if questions[i]["type"] == "multi_choice_horizontal_question" or questions[i]["type"] == "multi_choice_vertical_question":
				content.insert(document_actual_line + 2, "  questions: [{prompt: "+'"'+"<div class='justified'>" + questions[i]["statement"] + "</div>"+'"'+", options: ['"+ "', '".join(questions[i]["answers"]) +"'], required: true, horizontal: " + questions[i]["horizontal_orientation"] + "}],\n")
			elif questions[i]["type"] == "text_question" or questions[i]["type"] == "number_question":
				content.insert(document_actual_line + 2, "  questions: [{prompt: "+'"'+"<div class='justified'>" + questions[i]["statement"] + "</div>" +'"'+"}],\n")				
			# *************
			content.insert(document_actual_line + 3, "  data: {trialid: '"+ file_name.replace("_","-") +"_"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +"'}\n")
			content.insert(document_actual_line + 4, "};\n")

			content.insert(document_actual_line + 5, "questions_experiment.push(question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +");\n")
			content.insert(document_actual_line + 6, "\n")
			document_actual_line += 7
			if i == breaker:
				break
		
		if instructions[actual_int] == instructions[-1]:
			breaker = len(questions)

		# Las preguntas almacenadas se desordenan en caso que se requiera
		if instructions[actual_int]["random_mode"]:
			content.insert(document_actual_line, "questions_experiment = jsPsych.randomization.repeat(questions_experiment,1);\n")
			document_actual_line += 1

		# Se agrega al inicio la pantalla de instrucciones y se guarda en la lista final de preguntas
		content.insert(document_actual_line + 0, "questions_experiment.unshift(instruction_screen_experiment);\n")
		content.insert(document_actual_line + 1, "questions.push.apply(questions, questions_experiment)\n")
		content.insert(document_actual_line + 2, "\n")
		document_actual_line += 3

	# Se agrega la ventana para el fullscreen si se requiere
	if fullscreen_mode:
		content.insert(document_actual_line + 0, "if(window.innerWidth != screen.width || window.innerHeight != screen.height){\n")
		content.insert(document_actual_line + 1, "  questions.unshift({\n")
		content.insert(document_actual_line + 2, "    type: 'fullscreen',\n")	
		content.insert(document_actual_line + 3, "    message: '<p>The experiment will enter full screen mode</p>',\n")
		content.insert(document_actual_line + 4, "    button_label: 'Full screen',\n")
		content.insert(document_actual_line + 5, "    delay_after: 0,\n")
		content.insert(document_actual_line + 6, "    fullscreen_mode: true\n")
		content.insert(document_actual_line + 7, "  });\n")
		content.insert(document_actual_line + 8, "}\n")


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

def writeIndex(file_name, plugins):
	PATH = os.getcwd()
	f = open(PATH + '/'+ file_name + '/index.html', 'r')
	content = f.readlines()
	f.close()

	# inicio donde se agregan los plugins
	document_actual_line = 19

	if (not content[6].startswith('  <title>')):

		content.insert(6, '  <title>' + " ".join(file_name.split('_')).title() + '</title>\n')
		# inserción de plugins
		if plugins["jspsych-survey-multi-choice-horizontal.js"]:
			content.insert(document_actual_line, '  <script src="jsPsych-6/plugins/jspsych-survey-multi-choice-horizontal.js"></script>\n')
			document_actual_line+=1
		if plugins["jspsych-survey-multi-choice-vertical.js"]:
			content.insert(document_actual_line, '  <script src="jsPsych-6/plugins/jspsych-survey-multi-choice-vertical.js"></script>\n')
			document_actual_line+=1
		if plugins["jspsych-survey-text-number.js"]:
			content.insert(document_actual_line, '  <script src="jsPsych-6/plugins/jspsych-survey-text-number.js"></script>\n')
			document_actual_line+=1
		if plugins["jspsych-survey-text.js"]:
			content.insert(document_actual_line, '  <script src="jsPsych-6/plugins/jspsych-survey-text.js"></script>\n')
			document_actual_line+=1

		document_actual_line+=42
		content.insert(document_actual_line, "                      name: '" + file_name + "_results'\n")
		content.insert(document_actual_line + 3, "                    jsPsych.data.get().localSave('csv', '" + file_name + "_results.csv');\n")

		f = open(PATH + '/'+ file_name + '/index.html', "w")
		content = "".join(content)
		f.write(content)
		f.close()

	

def main():
	PATH = os.getcwd()
	data_file = PATH +'/data.txt'
	file = open(data_file, 'r') 
	lines = file.readlines()
	file.close()

	# set actual state (read file name, read questions, read answers)
	state = 0
	fullscreen_selected = False
	random_mode_selected = False
	questions=[]
	question_statement_selected = False
	horizontal_type_selected=False
	instructions = []
	instruction_title = True
	questions_cont = 0

	plugins = {
		"jspsych-survey-multi-choice-horizontal.js": False,
		"jspsych-survey-multi-choice-vertical.js": False,
		"jspsych-survey-text.js": False,
		"jspsych-survey-text-number.js": False,
	}

	for i in range(len(lines)):
		if lines[i][0] == '#' or lines[i] == '\n':
			continue
		elif lines[i][0] == '-':
			lines[i] = lines[i].replace('\n','')
			if (lines[i][1:]==" Name of test" or lines[i][1:]=="Name of test"):
				state = 1
			elif (lines[i][1:]==" Fullscreen" or lines[i][1:]=="Fullscreen"):
				state = 2
			elif (lines[i][1:]==" Instruction" or lines[i][1:]=="Instruction"):
				state = 3
			elif (lines[i][1:]==" Multi choice horizontal question" or lines[i][1:]=="Multi choice horizontal question") or (lines[i][1:]==" Multi choice vertical question" or lines[i][1:]=="Multi choice vertical question") or (lines[i][1:]==" Text question" or lines[i][1:]=="Text question") or (lines[i][1:]==" Number question" or lines[i][1:]=="Number question"):
				state = 4
				question_type = lines[i].replace(" ", "-")
				while question_type[0] == "-":
					question_type = question_type[1:]
				question_type = (question_type.replace("-", "_")).lower()
			else:
				state = 0
		else:
			if state == 1:
				file_name = lines[i][0:-1]
				# copy basic source to new folder
				try:
					shutil.copytree(PATH + '/sources', PATH + '/'+ file_name)
				except:
					shutil.rmtree(PATH + '/'+ file_name)
					shutil.copytree(PATH + '/sources', PATH + '/'+ file_name)
			elif state == 2:
				if (not fullscreen_selected):
					if lines[i] == "Yes\n" or lines[i] == "yes\n":
						fullscreen_mode = True
					elif lines[i] == "No\n" or lines[i] == "no\n":
						fullscreen_mode = False
					fullscreen_selected = True
					continue
			elif state == 3:
				if (not random_mode_selected):
					if lines[i] == "Yes\n" or lines[i] == "yes\n":
						random_mode = True
					elif lines[i] == "No\n" or lines[i] == "no\n":
						random_mode = False
					random_mode_selected = True
					continue
				else:
					if instruction_title:
						actual_instruction = {}
						actual_instruction["title"] = lines[i][0:-1]
						actual_instruction["random_mode"] = random_mode
						instruction_title = False
						continue
					else:
						actual_instruction["instruction"] = lines[i][0:-1]
						actual_instruction["questions_cont"] = questions_cont

					instructions.append(actual_instruction)
					instruction_title = True
					random_mode_selected = False
			elif state == 4:

				# Activación de plugins
				if question_type == "multi_choice_horizontal_question":
					plugins["jspsych-survey-multi-choice-horizontal.js"] = True
				elif question_type == "multi_choice_vertical_question":
					plugins["jspsych-survey-multi-choice-vertical.js"] = True
				elif question_type == "text_question":
					plugins["jspsych-survey-text.js"] = True
				elif question_type == "number_question":
					plugins["jspsych-survey-text-number.js"] = True
					
				if (not question_statement_selected):
					actual_question = {}
					actual_question["type"] = question_type
					actual_question["statement"] = lines[i][0:-1]
					question_statement_selected = True
					if (question_type == "multi_choice_horizontal_question"):
						actual_question["horizontal_orientation"] = "true"
						continue
					elif (question_type == "multi_choice_vertical_question"):
						actual_question["horizontal_orientation"] = "false"
						continue
				elif ((question_type == "multi_choice_horizontal_question" or question_type == "multi_choice_vertical_question")):
					if "answers" not in actual_question:
						actual_question["answers"] = [lines[i][0:-1]]
					else:
						actual_question["answers"].append(lines[i][0:-1])

					# si la linea siguiente no es un comentario, un salto de linea o un cambio de pregunta seguimos almacenando respuestas
					if lines[i+1] != '\n' and lines[i+1][0] != '-' and lines[i+1][0] != '#': 
						continue
				# almacenamos la pregunta con su tipo y sus respuestas (si tuviese)
				questions_cont += 1
				actual_question["number"] = questions_cont
				questions.append(actual_question)
				question_statement_selected = False

#	if same_answers:
#		for i in questions:
#			answer_list.append(answers)

	writeExperiment(file_name, instructions, questions, fullscreen_mode=fullscreen_mode)
	writeConfig(file_name)
	writeIndex(file_name, plugins)

main()


