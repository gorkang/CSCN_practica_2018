#####
# 
# Developed by Herman Valencia
# if you have any question send a message to herman.valencia.13@sansano.usm.cl
#
#####

import shutil, math, os, subprocess, yaml, importlib, json, re, glob
from subprocess import PIPE, Popen, STDOUT
from pathlib import Path

def writeExperiment(file_name, instructions, questions, fullscreen={"fullscreen_mode": False}):
	PATH = os.getcwd()
	f = open(PATH + '/'+ file_name + '/experiment.js', 'r')
	content = f.readlines()
	f.close()

	breaker = 0
	next_element = []
	verifications = []
	jump_list = []
	variables = {}
	text_modify = False
	text_variables = []
	jump_while = False

	# inicio documento en linea 19
	document_actual_line = 18

	plugins = {
		"multi_choice":"jspsych-survey-multi-choice",
		"multi_select":"jspsych-survey-multi-select",
		"text":"jspsych-survey-text",
		"number":"jspsych-survey-text",
		"date":"jspsych-survey-text",
		"range":"jspsych-survey-text"
	}

	content.insert(document_actual_line + 0, "var variables = {};  \n")
	document_actual_line += 1

	# Por cada conjunto de preguntas hay una instruccion
	for actual_int in range(len(instructions)):
		# creamos la lista de preguntas temporal
		content.insert(document_actual_line + 0, "var questions_experiment = [];    //temporal timeline\n")
		content.insert(document_actual_line + 1, "\n")
		document_actual_line += 2

		content.insert(document_actual_line + 0, "var instruction_screen_experiment = {\n")
		content.insert(document_actual_line + 1, "  type: 'instructions',\n")
		document_actual_line += 2

		if ("{" in instructions[actual_int]["instruction"]):
			text_variables = re.findall(r'{(.*?)}', instructions[actual_int]["instruction"])
			for variable in text_variables:
				if variable.split(":")[0] == "variable":
					instructions[actual_int]["instruction"] = instructions[actual_int]["instruction"].replace("{"+ variable +"}", "' + variables["' + variable.split(":")[1] + '"]+ '")
					text_modify = True
				elif variable.split(":")[0] == "image":
					instructions[actual_int]["instruction"] = instructions[actual_int]["instruction"].replace("{"+ variable +"}", '<img src="images/' + variable.split(":")[1] + '" />')


		try:
			content.insert(document_actual_line + 0, "  pages: ['<p><left><b><big>" + instructions[actual_int]["title"] + "</big></b><br />'+\n" )
			document_actual_line += 1
		except:
			content.insert(document_actual_line + 0, "  pages: ['<p><left>'+\n" )
			document_actual_line += 1
		try:
			content.insert(document_actual_line + 0, "  '" + instructions[actual_int]["instruction"] + "' +'</p>'],\n")
			document_actual_line += 1
		except:
			pass

		content.insert(document_actual_line + 0, "  data:{trialid: 'Screen_WM'},\n")
		content.insert(document_actual_line + 1, "  show_clickable_nav: true,\n")
		content.insert(document_actual_line + 2, "  on_trial_start: function (){\n")
		content.insert(document_actual_line + 3, "    bloquear_enter = 0;\n")
		content.insert(document_actual_line + 4, "  }\n")
		content.insert(document_actual_line + 5, "}\n")
		content.insert(document_actual_line + 6, "\n")
		document_actual_line += 7

		if instructions[actual_int] != instructions[-1]:
			breaker = instructions[actual_int + 1]["previous_questions"] - 1
			if instructions[actual_int]["previous_questions"] == instructions[actual_int + 1]["previous_questions"]:
				jump_while = True
		elif instructions[actual_int] == instructions[-1]:
			breaker = len(questions)

		i =  instructions[actual_int]["previous_questions"]

		while (i < len(questions)):
			if jump_while:
				jump_while = False
				break

			content.insert(document_actual_line + 0, "var question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +" = {\n")
			document_actual_line += 1

			try:
				content.insert(document_actual_line + 0, "  title: '"+ questions[i]["title"] +"',\n")
				document_actual_line += 1
			except:
				pass

			try:
				content.insert(document_actual_line + 0, "  preamble: ' <b><big>" + questions[i]["preamble"] + "</big></b> ',\n")
				document_actual_line += 1
			except:
				pass

			if ("{" in questions[i]["text"]):
				text_variables = re.findall(r'{(.*?)}', questions[i]["text"])
				for variable in text_variables:
					if variable.split(":")[0] == "variable":
						questions[i]["text"] = questions[i]["text"].replace("{"+ variable +"}", "' + variables["' + variable.split(":")[1] + '"] + '")
						text_modify = True
					elif variable.split(":")[0] == "image":
						questions[i]["text"] = questions[i]["text"].replace("{"+ variable +"}", '<img src="images/' + variable.split(":")[1] + '" />')

			if questions[i]["type"] == "multi_choice" or questions[i]["type"] == "multi_select":
				# actual question plugin:
				content.insert(document_actual_line + 0, "  type:'"+ plugins[questions[i]["type"]][8:] +"',\n")
				document_actual_line += 1
				if text_modify:
					content.insert(document_actual_line + 0, "  questions:[{prompt: '',options: ['']}],\n")
					content.insert(document_actual_line + 1, "  on_start: function(trial) {\n")
					document_actual_line += 2
				choices = []
				for choice in questions[i]["choices"]:
					choices.append(choice)
				if text_modify:
					content.insert(document_actual_line + 0, "    trial.questions = [{prompt: '<div class=" + '"' + "justified" + '"' + ">" + questions[i]["text"] + "</div>'" 
						+ ", options: ['"+ "', '".join( choices ) +"'], required: true" 
						+ ", horizontal: " + str((questions[i]["orientation"]).lower() == "horizontal").lower() 
						+ ", not_enabled_options: " + str(questions[i]["not_enabled_options"]) 
						+ (", error_message: '" + questions[i]["error_message"] + "'" if ("error_message" in questions[i]) else "" ) 
						+ (", expected_options: " + str(questions[i]["expected_options"]) if (questions[i]["expected_options"]) else "") 
						+ "}];\n")
					document_actual_line += 1
				else:
					content.insert(document_actual_line + 0, "  questions: [{prompt: '<div class=" + '"' + "justified" + '"' + ">" + questions[i]["text"] + "</div>'" 
						+ ", options: ['"+ "', '".join( choices ) +"'], required: true" 
						+ ", horizontal: " + str((questions[i]["orientation"]).lower() == "horizontal").lower() 
						+ ", not_enabled_options: " + str(questions[i]["not_enabled_options"]) 
						+ (", error_message: '" + questions[i]["error_message"] + "'" if ("error_message" in questions[i]) else "" ) 
						+ (", expected_options: " + str(questions[i]["expected_options"]) if (questions[i]["expected_options"]) else "") 
						+ "}],\n")
					document_actual_line += 1
			elif questions[i]["type"] == "text" or questions[i]["type"] == "number" or questions[i]["type"] == "date" or questions[i]["type"] == "range":
				# actual question plugin:
				content.insert(document_actual_line + 0, "  type: '"+ plugins[questions[i]["type"]][8:] +"',\n")
				document_actual_line += 1
				if text_modify:
					content.insert(document_actual_line + 0, "  questions:[{prompt: '',options: ['']}],\n")
					content.insert(document_actual_line + 1, "  on_start: function(trial) {\n")
					content.insert(document_actual_line + 2, "    trial.questions = [{prompt: '<div class=" + '"' + "justified" + '"' + ">" + questions[i]["text"] + "</div>', type: '"+ questions[i]["type"] + "'" 
						+ (", endword: ' " + questions[i]["endword"] + "'" if ("endword" in questions[i]) else "" ) 
						+ (", required: '" + questions[i]["required"].lower() + "'" if ("required" in questions[i]) else ", required: true" ) 
						+ (", language: '" + questions[i]["language"].lower() + "'" if ("language" in questions[i]) else "" ) 
						+ (", error_message: '" + questions[i]["error_message"] + "'" if ("error_message" in questions[i]) else "" ) 
						+ (", range: " + '['+','.join(str(e) for e in questions[i]["range"])+']' if ("range" in questions[i]) else "" ) 
						+ "}]; \n")
					content.insert(document_actual_line + 3, "  },\n")
					document_actual_line += 4
				else:				
					content.insert(document_actual_line + 0, "  questions: [{prompt: '<div class=" + '"' + "justified" + '"' + ">" + questions[i]["text"] + "</div>', type: '"+ questions[i]["type"] + "'" 
						+ (", endword: ' " + questions[i]["endword"] + "'" if ("endword" in questions[i]) else "" ) 
						+ (", required: '" + questions[i]["required"].lower() + "'" if ("required" in questions[i]) else ", required: true" ) 
						+ (", language: '" + questions[i]["language"].lower() + "'" if ("language" in questions[i]) else "" ) 
						+ (", error_message: '" + questions[i]["error_message"] + "'" if ("error_message" in questions[i]) else "" ) 
						+ (", range: " + '['+','.join(str(e) for e in questions[i]["range"])+']' if ("range" in questions[i]) else "" ) 
						+ "}], \n")
					document_actual_line += 1
			if text_modify:
				content.insert(document_actual_line + 0, "  },\n")
				document_actual_line += 1
			content.insert(document_actual_line + 0, "  data: {trialid: '"+ questions[i]["item_id"] +"'}")
			document_actual_line += 1

			if ("variable" in questions[i]):
				variables[questions[i]["variable"]] = questions[i]["item_id"]
				content.insert(document_actual_line + 0, ",\n  on_finish: function(data) {\n")
				content.insert(document_actual_line + 1, "      variables['"+questions[i]["variable"]+"'] = data.responses.substr(7, data.responses.length - 9);\n")
				content.insert(document_actual_line + 2, "  }\n")
				content.insert(document_actual_line + 3, "}\n")
				document_actual_line += 4
			else:
				content.insert(document_actual_line + 0, "\n}\n")
				document_actual_line += 1
			# Si existe condicional se agrega el condicional y sus caminos:
			if questions[i]["previous"] != None or not not jump_list or text_modify:
				restriction_cont = 0
				restriction_dict = {}
				verification = "    var answer_previous = []\n"
				verification += "    var answer_next = []\n"
				restriction_cont += 2
				if questions[i]["previous"] != None:
					verification += "    answer_previous = answer_previous.concat([" + ','.join(['""' for prev in range(len(questions[i]["previous"]))]) + "]) \n"
					restriction_cont += 1
				if not not jump_list:
					verification += "    answer_next = answer_next.concat([" + ','.join(['""' for prev in range(len(jump_list))]) + "]) \n"
					restriction_cont += 1
				if questions[i]["previous"] != None or not not jump_list:
					verification += "    data.slice().reverse().forEach (function (element) { \n"
				restriction_cont += 1
				temporal_cont = 0
				final_cont = 0
				for index,prev in enumerate(questions[i]["previous"]):
					verification += '      if (answer_previous['+ str(index) +'] !== "false"){\n'
					temporal_cont = index + 1
					for lista in prev:
						for restriction in prev[lista]:
							for key, value in restriction.items():
								restriction_dict[key] = "true"
								if value == False:
									value = 'No'
								elif value == True:
									value = 'Yes'
								verification += '        if (element.trialid === "'+ str(key) +'" && restriction_dict[' + str(index) + ']["'+ str(key) +'"] === "true"){ answer_previous['+ str(index) +'] = (element['+ "'" +'responses'+ "'" +'] === '+ "'" +'{"Q0":"' + str(value) + '"}'+ "'" +').toString(); restriction_dict[' + str(index) + ']["'+ str(key) +'"] = "false"}\n'
								restriction_cont += 1
						verification += '      }\n'
					final_cont = index + 1
				for index, actual in enumerate(jump_list):
					verification += '      if (answer_next['+ str(index) +'] !== "false"){\n'
					for actual_key, actual_value in actual.items():
						for dictionary_list in actual_value:
							for key_list, value_list in dictionary_list.items():
								for restriction in value_list:
									for key, value in restriction.items():
										restriction_dict[key] = "true"
										if value == False:
											value = 'No'
										elif value == True:
											value = 'Yes'
										verification += '        if (element.trialid === "'+ str(key) +'" && restriction_dict[' + str(index + temporal_cont) + ']["'+ str(key) +'"] === "true"){answer_next['+ str(index) +'] = (element['+ "'" +'responses'+ "'" +'] === '+ "'" +'{"Q0":"' + str(value) + '"}'+ "'" +').toString(); restriction_dict[' + str(index + temporal_cont) + ']["'+ str(key) +'"] = "false"}\n'
										restriction_cont += 1
					verification += '      }\n'
					final_cont = index + temporal_cont  + 1
				if questions[i]["previous"] != None or not not jump_list:
					verification += '    })\n'

				restriction_array = []
				for temporal in range(final_cont):
					restriction_array.append(restriction_dict)

				content.insert(document_actual_line + 0, "\nvar if_question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +" = { \n")
				content.insert(document_actual_line + 1, "  timeline:[question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +"], \n")
				content.insert(document_actual_line + 2, "  conditional_function: function (){ \n")
				content.insert(document_actual_line + 3, "    var data = jsPsych.data.get().values(); var cont_prev = 0; var cont_next = 0; \n")
				content.insert(document_actual_line + 4, "    var restriction_dict = "+ json.dumps(restriction_array) +"; \n")
				content.insert(document_actual_line + 5, verification)
				document_actual_line += (6 + restriction_cont) 
				if text_modify:
					for index, variable in enumerate(text_variables):
						content.insert(document_actual_line + 0, "    "+ variable +" = variables['"+ variable +"']; \n")
						document_actual_line += 1
					text_modify = False
				content.insert(document_actual_line + 0, "    for (var i = 0; i < answer_previous.length; i++) \n")
				content.insert(document_actual_line + 1, "      if (answer_previous[i] === 'true') \n")
				content.insert(document_actual_line + 2, "        cont_prev += 1; \n")
				content.insert(document_actual_line + 3, "    for (var j=0; j < answer_next.length; j++) \n")
				content.insert(document_actual_line + 4, "      if (answer_next[j] === 'true')\n")
				content.insert(document_actual_line + 5, "        cont_next += 1; \n")
				content.insert(document_actual_line + 6, "    if ((cont_next === 0 && cont_prev !== 0)) return true;\n")
				content.insert(document_actual_line + 7, "    return false \n")
				content.insert(document_actual_line + 8, "  } \n")
				content.insert(document_actual_line + 9, "} \n")
				content.insert(document_actual_line + 10, "\n")
				content.insert(document_actual_line + 11, "questions_experiment.push(if_question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +");\n")
				content.insert(document_actual_line + 12, "\n")
				document_actual_line += 13
			else:	
				# En caso contrario solo agregamos la pregunta:
				content.insert(document_actual_line + 0, "questions_experiment.push(question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +");\n")
				content.insert(document_actual_line + 1, "\n")
				document_actual_line += 2

			# En caso que exista un "next" hay 2 opciones, que el next sea a un elemento que ya pasamos o que sea a un elemento al cual aún no llegamos
			# TODO: maxLoops if next is previous
			if questions[i]["next"] != None:
				for it, question in enumerate(questions):
					# si aun no pasamos por el elemento se agregarán las restricciones al jump_list
					if it > i:
						jump_list.append(questions[i]["next"])
						break
					# en caso contrario tenemos que agregar las preguntas que hayan desde el punto al que saltamos hasta el punto actual
					if questions[it]["item_id"] == str(next(iter(questions[i]["next"]))):
						restriction_cont = 0
						restriction_dict = {}
						verification = "    data.slice().reverse().forEach (function (element) { \n"
						temporal_cont = 0
						for index, next_dict in enumerate(questions[i]["next"][questions[it]["item_id"]]):
							verification += '      if (answer['+ str(index) +'] !== "false"){\n'
							restriction_cont += 2
							for lista in next_dict:
								for restriction in next_dict[lista]:
									for key, value in restriction.items():
										restriction_dict[key] = "true"
										if value == False:
											value = 'No'
										elif value == True:
											value = 'Yes'
										verification += '        if (element.trialid === "'+ str(key) +'" && restriction_dict[' + str(index) + ']["'+ str(key) +'"] === "true"){ answer['+ str(index) +'] = (element['+ "'" +'responses'+ "'" +'] === '+ "'" +'{"Q0":"' + str(value) + '"}'+ "'" +').toString(); restriction_dict[' + str(index) + ']["'+ str(key) +'"] = "false"}\n'
										restriction_cont += 1
							verification += '      }\n'
							temporal_cont = index + 1
						verification += '    });\n'


						restriction_array = []
						for temporal in range(temporal_cont):
							restriction_array.append(restriction_dict)

						content.insert(document_actual_line + 0, "var if_repeat_question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +" = { \n")
						# i + 1 es para el caso de agregar tambien la pregunta llave que nos lleva al inicio del ciclo por lo que se usará solo i para agregar hasta la pregunta anterior
						content.insert(document_actual_line + 1, "  timeline:questions_experiment.slice(" + str(it) + "," + str(i) + "), \n")
						content.insert(document_actual_line + 2, "  conditional_function: function (){ \n")
						content.insert(document_actual_line + 3, "    var data = jsPsych.data.get().values(); \n")
						content.insert(document_actual_line + 4, "    var restriction_dict = "+ json.dumps(restriction_array) +"; \n")
						content.insert(document_actual_line + 5, "    var answer = [" + ','.join(['""' for prev in questions[i]["next"][questions[it]["item_id"]]]) + "]; \n")
						content.insert(document_actual_line + 6, verification)
						document_actual_line += (7 + restriction_cont) 
						content.insert(document_actual_line + 0, "    for (var i = 0; i < answer.length; i++) \n")
						content.insert(document_actual_line + 1, "      if (answer[i] === 'true') return true; \n")
						content.insert(document_actual_line + 2, "    return false \n")
						content.insert(document_actual_line + 3, "  } \n")
						content.insert(document_actual_line + 4, "} \n")
						content.insert(document_actual_line + 5, "\n")
						content.insert(document_actual_line + 6, "questions_experiment.push(if_repeat_question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +");\n")
						content.insert(document_actual_line + 7, "\n")
						document_actual_line += 8
						break

			# si llegamos al punto mencionado en next, borramos los elementos que coincidan con este punto en la lista
			actual = 0
			while actual < len(jump_list):
				election = str(next(iter(jump_list[actual])))
				if questions[i]["item_id"] == election:
					jump_list.pop(actual)
					actual -= 1
				actual += 1

			if i == breaker:
				break
			i += 1			
		# Las preguntas almacenadas se desordenan en caso que se requiera
		if instructions[actual_int]["random_mode"]:
			content.insert(document_actual_line, "questions_experiment = jsPsych.randomization.repeat(questions_experiment,1);\n")
			document_actual_line += 1

		# Se agrega al inicio la pantalla de instrucciones y se guarda en la lista final de preguntas
		content.insert(document_actual_line + 0, "questions_experiment.unshift(instruction_screen_experiment);\n")
		content.insert(document_actual_line + 1, "questions.push.apply(questions, questions_experiment)\n")
		content.insert(document_actual_line + 2, "\n")
		document_actual_line += 3

	# If is required, we add the fullscreen window
	if fullscreen["fullscreen_mode"]:
		content.insert(document_actual_line + 0, "if (window.innerWidth != screen.width || window.innerHeight != screen.height){\n")
		content.insert(document_actual_line + 1, "  questions.unshift({\n")
		content.insert(document_actual_line + 2, "    type: 'fullscreen',\n")	
		content.insert(document_actual_line + 3, "    message: '<p>" + fullscreen["base_text"] + "</p>',\n")
		content.insert(document_actual_line + 4, "    button_label: 'Full screen',\n")
		content.insert(document_actual_line + 5, "    delay_after: 0,\n")
		content.insert(document_actual_line + 6, "    fullscreen_mode: true\n")
		content.insert(document_actual_line + 7, "  })\n")
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
		content.insert(6, '    "exp_id": "'+ file_name +'_experiment",\n')
		content.insert(7, '    "name": "'+ file_name +'_experiment",\n')

		f = open(PATH + '/'+ file_name + '/config.json', "w")
		content = "".join(content)
		f.write(content)
		f.close()

def writeIndex(file_name, plugins):
	PATH = os.getcwd()
	f = open(PATH + '/'+ file_name + '/index.html', 'r')
	content = f.readlines()
	f.close()

	# Start, when we adding the plugins
	document_actual_line = 19

	if (not content[6].startswith('  <title>')):

		content.insert(6, '  <title>' + " ".join((file_name.split('_')[1]).split("-")).title() + '</title>\n')
		# inserción de plugins
		for plugin, validation in plugins.items():
			if validation:
				content.insert(document_actual_line, '  <script src="jsPsych-6/plugins/'+plugin+'"></script>\n')
				document_actual_line+=1
			else:
				if os.path.exists(PATH + '/'+ file_name + '/jsPsych-6/plugins/'+plugin):
  					os.remove(PATH + '/'+ file_name + '/jsPsych-6/plugins/'+plugin)
		
		document_actual_line+=42
		content.insert(document_actual_line, "                      name: '" + file_name + "_results'\n")
		content.insert(document_actual_line + 3, "                    jsPsych.data.get().localSave('csv', '" + file_name + "_results.csv');\n")

		f = open(PATH + '/'+ file_name + '/index.html', "w")
		content = "".join(content)
		f.write(content)
		f.close()

def testing(PATH, file_name):
	# Testing new experiment
	file = open('/'+ str(Path(PATH).parents[0]) + '/testing/test_list.txt', 'r')
	original = file.readlines()
	file.close()

	lines = original

	erased = ""
	for i in range(len(lines)):
		if lines[i] != '\n':
			if lines[i][0] != '#':
				lines[i]= '#' + lines[i]
			if lines[i].lstrip('#').rstrip('\n') == file_name:
				del lines[i]
				break

	lines.insert(2, file_name+'\n')

	f = open(str(Path(PATH).parents[0]) + '/testing/test_list.txt', "w")
	content = "".join(lines)
	f.write(content)
	f.close()

	# Copying the finish test
	try:
		shutil.copytree(PATH + '/'+ file_name, str(Path(PATH).parents[0]) + '/pruebas_individuales/'+ file_name)
	except:
		folder_elements = dict ([(f, None) for f in os.listdir (str(Path(PATH).parents[0]) + '/pruebas_individuales/'+ file_name)])
		# Store the documentation if exists
		if "documentation" in folder_elements:
			shutil.copytree(str(Path(PATH).parents[0]) + '/pruebas_individuales/'+ file_name + "/documentation", PATH + '/'+ file_name + "/documentation")
		shutil.rmtree(str(Path(PATH).parents[0]) + '/pruebas_individuales/'+ file_name)
		shutil.copytree(PATH + '/'+ file_name, str(Path(PATH).parents[0]) + '/pruebas_individuales/'+ file_name)

	# Erasing maker experiment folder
	try:
		shutil.rmtree(PATH + '/'+ file_name)
	except:
		pass

	# Starting test	
	os.system("python3 "+'/'+ str(Path(PATH).parents[0]) + '/testing/main.py')

	# Restore test_list.txt
	f = open(str(Path(PATH).parents[0]) + '/testing/test_list.txt', "w")
	f.write("".join(original))
	f.close()

def main():
	PATH = os.getcwd()
	yaml_file = PATH +'/data.yaml'
	config_file = PATH +'/test_configuration.yaml'

	with open(yaml_file, 'r') as stream:
		try:
			data = yaml.safe_load(stream)
		except yaml.YAMLError as exc:
			print("Error al procesar el archivo data.yaml, verifique que esté correctamente escrito e identado.")
			return

	# Import classes
	classes = importlib.import_module('classes')
	items = []

	for item in data:
		# Get item id and specification.
		item_id, spec = list(item.items())[0]
		if "previous" not in spec:
			spec["previous"] = None
		if "next" not in spec:
			spec["next"] = None

		# Get experiment configuration
		if item_id == "test configuration":
			try:
				file_name = ("".join([word[0] for word in spec["test_name"].split()])).upper() + "_" + (spec["test_name"].replace(' ', '-')).lower()
				try:
					order = spec["order"]
				except:
					pass
				try:
					scales = spec["scales"]
				except:
					pass
				try:
					images = spec["images"]
				except:
					images = None
			except:
				print("existe un error en la configuración, verifique la configuración del experimento al principio del archivo data.yaml")
				return
		else:
			# Get actual class according to item type.
			class_name = spec['type'].replace(' ', '_')
			if class_name == "number" or class_name == "date" or class_name == "range":
				cls = classes.__dict__["text"]
			elif class_name == "multi_select":
				cls = classes.__dict__["multi_choice"]
			else:
				cls = classes.__dict__[class_name]    

			# Create object.
			new_item_object = cls(item_id.replace(' ', '_'), spec)

			# Add to list.
			items.append(cls(item_id.replace(' ', '_'), spec))

	fullscreen_mode = False
	questions=[]
	instructions = []
	questions_cont = 0
	error = False
	ids = {}

	plugins = {
		"jspsych-survey-multi-choice.js": False,
		"jspsych-survey-text.js": False,
		"jspsych-survey-multi-select.js": False
	}

	
	# order items
	# ---------------------------- TODO -----------------------------

	experiment = []
	# create test
	for i in range(len(items)):
		item_type = items[i].type
		if (item_type=="fullscreen"):
			try:
				base_text = str(items[i].arguments["text"])
			except:
				base_text = "El experimento entrará en modo pantalla completa"
			fullscreen = {"fullscreen_mode": True, "base_text": base_text}
			fullscreen_mode = True
		elif (item_type=="instruction"):
			actual_instruction = {}
			try:
				actual_instruction["title"] = str(items[i].arguments["title"])
			except:
				pass
			try:
				actual_instruction["instruction"] = str(items[i].arguments["text"])
			except:
				pass
			try:
				actual_instruction["random_mode"] = (items[i].arguments["questions_mode"] == "random")
			except:
				actual_instruction["random_mode"] = False
			actual_instruction["previous_questions"] = questions_cont
			instructions.append(actual_instruction)
		elif (item_type == "multi_choice") or (item_type == "multi_select") or (item_type=="text") or (item_type=="number")  or (item_type=="date") or (item_type == "range"):
			actual_question = {}

			actual_question["type"] = item_type
			
			# Plugin activation 
			if item_type == "multi_choice" or item_type == "multi_select":
				plugins["jspsych-survey-"+ item_type.replace("_","-") + ".js"] = True
				try:
					actual_question["orientation"] = items[i].arguments["orientation"]
				except:
					actual_question["orientation"] = "vertical"
				try:
					actual_question["expected_options"] = items[i].arguments["expected_options"]
				except:
					actual_question["expected_options"] = None
				try:
					actual_question["not_enabled_options"] = items[i].arguments["not_enabled_options"]
				except:
					actual_question["not_enabled_options"] = 0					
				try:
					if (type(items[i].arguments["choices"]) == list):
						actual_question["choices"] = items[i].arguments["choices"]
					elif (type(items[i].arguments["choices"]) == str):
						actual_question["choices"] = scales[items[i].arguments["choices"]]
					for index, value in enumerate(actual_question["choices"]):
						if value == False:
							actual_question["choices"][index] = 'No'
						elif value == True:
							actual_question["choices"][index] = 'Yes'
						if (type(value) == dict):
							actual_question["choices"][index] = '<img src="images/' + value["image"] + '" />'
					if actual_question["orientation"] == "horizontal":
						actual_question["choices"] = ["<br>" + s for s in actual_question["choices"]]
				except:
					print("ocurrió un error al seleccionar las alternativas de la pregunta de "+ item_type.replace("_"," ") +" '"+items[i].item_id+"'")
					error = True

			elif item_type == "text" or item_type == "number" or item_type == "date" or (item_type == "range"):
				plugins["jspsych-survey-text.js"] = True
				try:
					actual_question["endword"] = items[i].arguments["endword"] 
				except:
					pass

				try:
					actual_question["language"] = items[i].arguments["language"] 
				except:
					pass

				try:
					actual_question["range"] = items[i].arguments["range"] 
				except:
					pass

				try:
					actual_question["required"] = items[i].arguments["required"] 
				except:
					pass
			try:
				actual_question["error_message"] = items[i].arguments["error_message"] 
			except:
				pass
			try:
				actual_question["title"] = str(items[i].arguments["title"])
			except:
				pass
			try:
				actual_question["preamble"] = str(items[i].arguments["preamble"])
			except:
				pass
			try:
				actual_question["text"] = str(items[i].arguments["text"])
			except:
				pass

			if items[i].item_id in ids:
				ids[items[i].item_id] += 1
			else:
				ids[items[i].item_id] = 1
			actual_question["item_id"] = str(items[i].item_id) + "_" + str(ids[items[i].item_id])
			actual_question["previous"] = items[i].previous
			actual_question["next"] = items[i].next

			try:
				actual_question["variable"] = items[i].arguments["chocen_value"]
			except:
				pass

			questions_cont += 1
			actual_question["index"] = questions_cont
			questions.append(actual_question)
		else:
			print("Ha ocurrido un error con la creación de la prueba, revise el archivo data.yaml en el item '" + items[i].item_id + "'")
			print("Información adicional:")
			items[i].render()
			error = True
	# se arreglan los id's dependiendo de la cantidad de elementos de la pregunta i
	for question in questions:
		question["item_id"] = (''.join(question["item_id"].split('_')[:-1]) + "_" + ("0"*(len(str(abs((ids[''.join(question["item_id"].split('_')[:-1])])))) - len(str(abs(( int(question["item_id"].split('_')[-1]))))) )) + question["item_id"].split('_')[-1] )

	if (not fullscreen_mode):
		fullscreen = {"fullscreen_mode": False}

	if error:
		return

	# copy basic source to new folder
	try:
		shutil.copytree(PATH + '/sources', PATH + '/'+ file_name)
	except:
		shutil.rmtree(PATH + '/'+ file_name)
		shutil.copytree(PATH + '/sources', PATH + '/'+ file_name)

	if images:
		shutil.copytree(PATH + '/images/' + images, PATH + '/'+ file_name + "/images")

	writeExperiment(file_name, instructions, questions, fullscreen=fullscreen)
	writeConfig(file_name)
	writeIndex(file_name, plugins)

	print("Prueba "+ file_name +" creada con éxito.")
	print("Iniciando testing de la prueba...")
	testing(PATH, file_name)
	
if __name__ == '__main__' : main()


