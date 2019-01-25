#####
# 
# Developed by Herman Valencia
# if you have any question send a message to herman.valencia.13@sansano.usm.cl
#
#####

import shutil, math, os, subprocess, yaml, importlib
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

	# inicio documento en linea 19
	document_actual_line = 19

	plugins = {
		"multi_choice_horizontal":"jspsych-survey-multi-choice-horizontal",
		"multi_choice_vertical":"jspsych-survey-multi-choice-vertical",
		"text":"jspsych-survey-text",
		"number":"jspsych-survey-text",
		"date":"jspsych-survey-text",
		"range":"jspsych-survey-text"
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
		document_actual_line += 2
		# *************
		try:
			content.insert(document_actual_line + 0, "    pages: ['<p><left><b><big>" + instructions[actual_int]["title"] + "</big></b><br />'+\n" )
			document_actual_line += 1
		except:
			content.insert(document_actual_line + 0, "    pages: ['<p><left>'+\n" )
			document_actual_line += 1
		try:
			content.insert(document_actual_line + 0, "    '" + instructions[actual_int]["instruction"] + "' +'</p>'],\n")
			document_actual_line += 1
		except:
			pass
		
		# *************
		content.insert(document_actual_line + 0, "    data:{trialid: 'Screen_WM'},\n")
		content.insert(document_actual_line + 1, "    show_clickable_nav: true,\n")
		content.insert(document_actual_line + 2, "    on_trial_start: function(){\n")
		content.insert(document_actual_line + 3, "        bloquear_enter = 0;\n")
		content.insert(document_actual_line + 4, "    }\n")
		content.insert(document_actual_line + 5, "};\n")
		content.insert(document_actual_line + 6, "\n")
		document_actual_line += 7

		if instructions[actual_int] != instructions[-1]:
			breaker = instructions[actual_int + 1]["previous_questions"] - 1
		elif instructions[actual_int] == instructions[-1]:
			breaker = len(questions)

		for i in range(instructions[actual_int]["previous_questions"],len(questions)):

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

			if questions[i]["type"] == "multi_choice":
				# actual question plugin:
				content.insert(document_actual_line + 0, "  type: '"+ plugins[questions[i]["type"] + "_" + questions[i]["orientation"] ][8:] +"',\n")
				choices = []
				for choice in questions[i]["choices"]:
					if choice == True:
						choice = "Yes"
					elif choice == False:
						choice = "No"
					choices.append(choice)
				content.insert(document_actual_line + 1, "  questions: [{prompt: "+'"'+"<div class='justified'>" + questions[i]["text"] + "</div>"+'"'+", options: ['"+ "', '".join( choices ) +"'], required: true, horizontal: " + str(questions[i]["orientation"] == "horizontal").lower() + "}],\n")
			elif questions[i]["type"] == "text" or questions[i]["type"] == "number" or questions[i]["type"] == "date" or questions[i]["type"] == "range":
				# actual question plugin:
				content.insert(document_actual_line + 0, "  type: '"+ plugins[questions[i]["type"]][8:] +"',\n")
				content.insert(document_actual_line + 1, "  questions: [{prompt: "+'"'+"<div class='justified'>" + questions[i]["text"] + "</div>" +'"'+", type: '"+ questions[i]["type"] + "'" 
					+ (", endword: ' " + questions[i]["endword"] + "'" if ("endword" in questions[i]) else "" ) 
					+ (", required: '" + questions[i]["required"].lower() + "'" if ("required" in questions[i]) else ", required: true" ) 
					+ (", language: '" + questions[i]["language"].lower() + "'" if ("language" in questions[i]) else "" ) 
					+ (", error_message: '" + questions[i]["error_message"] + "'" if ("error_message" in questions[i]) else "" ) 
					+ (", range: " + '['+','.join(str(e) for e in questions[i]["range"])+']' if ("range" in questions[i]) else "" ) 
					+ "}], \n")				

			content.insert(document_actual_line + 2, "  data: {trialid: '"+ questions[i]["item_id"] +"'}\n")
			content.insert(document_actual_line + 3, "};\n")
			document_actual_line += 4

			# Si existe condicional se agrega el condicional y sus caminos:
			'''
			var data = [{'rt': 1905, 'responses': '{"Q0":"123"}', 'trialid': "VCRT_05", 'trial_type': "survey-text", 'trial_index': 2}, {'rt': 1905, 'responses': '{"Q0":"456"}', 'trialid': "VCRT_06", 'trial_type': "survey-text", 'trial_index': 2}];
			var answer = "";
			verification += data.forEach(function(element) { 

			verification += 'if(element.trialid == "VCRT_05"){ if (answer != "false") { answer = (element['+ "'" +'responses'+ "'" +'] == '+ "'" +'{"Q0":"123"}'+ "'" +').toString()}}'

			verification += if(element.trialid == "VCRT_06"){ 
			verification += if (answer != "false") {
			verification += answer = (element['responses'] == '{"Q0":"456"}').toString()
			verification += }}});

			console.log(answer == "true")




				content.insert(document_actual_line + 0, "var if_"+ file_name +"_"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +" = { \n"
				content.insert(document_actual_line + 1, "    timeline:[otra_crt10], \n"
				content.insert(document_actual_line + 2, "    conditional_function: function(){ \n"
				content.insert(document_actual_line + 3, "        var data = jsPsych.data.get().last(1).values()[0]["responses"]; \n"
				content.insert(document_actual_line + 4, "        console.log(selected = jsPsych.data.get()); \n"
				content.insert(document_actual_line + 5, "        if (data != '{"Q0":"Otra"}'){ \n"
				content.insert(document_actual_line + 6, "            return false; \n"
				content.insert(document_actual_line + 7, "        } else { \n"
				content.insert(document_actual_line + 8, "            return true; \n"
				content.insert(document_actual_line + 9, "        } \n"
				content.insert(document_actual_line + 10, "    } \n"
				content.insert(document_actual_line + 11, "} \n"
				content.insert(document_actual_line + 12, "\n"
				content.insert(document_actual_line + 13, "var complete_crt10 = { \n"
				content.insert(document_actual_line + 14, "    timeline:[verbal_crt10, if_crt10] \n"
				content.insert(document_actual_line + 15, "} \n"
				document_actual_line += 16
			'''
			#if questions[i]["previous"] != None:
			#	print("previous")
			#	print(questions[i]["previous"])
			#	print(questions[i])

			#if questions[i]["next"] != None:
			#	for key, values in questions[i]["next"].items():
			#		next_element.append(key)
			#		verifications.append(values)
			
			if questions[i]["previous"] != None:
				verification = "        data.forEach(function(element) { "
				if questions[i]["previous"] != None:
					for prev in questions[i]["previous"]:
						for lista in prev:
							for restriction in prev[lista]:
				#				print(type(restriction))
								for key, value in restriction.items():
									if value == False:
										value = 'No'
									elif value == True:
										value = 'Yes'
									verification += 'if(element.trialid == "'+ key +'"){ if (answer != "false") { answer = (element['+ "'" +'responses'+ "'" +'] == '+ "'" +'{"Q0":"' + value + '"}'+ "'" +').toString()}}'
				verification += '})\n'

				content.insert(document_actual_line + 0, "var if_question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +" = { \n")
				content.insert(document_actual_line + 1, "    timeline:[question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +"], \n")
				content.insert(document_actual_line + 2, "    conditional_function: function(){ \n")
				content.insert(document_actual_line + 3, "        var data = jsPsych.data.get().values(); \n")
				content.insert(document_actual_line + 4, "        var answer = " + '""' + "; \n")
				content.insert(document_actual_line + 5, verification)
				content.insert(document_actual_line + 6, "        return answer == 'true'; \n")
				content.insert(document_actual_line + 7, "    } \n")
				content.insert(document_actual_line + 8, "} \n")
				content.insert(document_actual_line + 9, "\n")
				content.insert(document_actual_line + 10, "questions_experiment.push(if_question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +");\n")
				content.insert(document_actual_line + 11, "\n")
				document_actual_line += 12

			else:	
				# En caso contrario solo agregamos la pregunta:
				content.insert(document_actual_line + 0, "questions_experiment.push(question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +");\n")
				content.insert(document_actual_line + 1, "\n")
				document_actual_line += 2
			if i == breaker:
				break
		
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
	if fullscreen["fullscreen_mode"]:
		content.insert(document_actual_line + 0, "if(window.innerWidth != screen.width || window.innerHeight != screen.height){\n")
		content.insert(document_actual_line + 1, "  questions.unshift({\n")
		content.insert(document_actual_line + 2, "    type: 'fullscreen',\n")	
		content.insert(document_actual_line + 3, "    message: '<p>" + fullscreen["base_text"] + "</p>',\n")
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

	# inicio donde se agregan los plugins
	document_actual_line = 19

	if (not content[6].startswith('  <title>')):

		content.insert(6, '  <title>' + " ".join(file_name.split('_')).title() + '</title>\n')
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
	# testing new test
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
	
	os.system("python3 "+'/'+ str(Path(PATH).parents[0]) + '/testing/main.py')

	# restore test_list.txt
	f = open(str(Path(PATH).parents[0]) + '/testing/test_list.txt', "w")
	f.write("".join(original))
	f.close()

	'''
	# Actualmente no se está creando la carpeta automáticamente en las pruebas individuales, si se quiere hacer hay que descomentar esto
	# copying the finish test
	try:
		shutil.copytree(PATH + '/'+ file_name, str(Path(PATH).parents[0]) + '/pruebas_individuales/'+ file_name)
	except:
		shutil.rmtree(str(Path(PATH).parents[0]) + '/pruebas_individuales/'+ file_name)
		shutil.copytree(PATH + '/'+ file_name, str(Path(PATH).parents[0]) + '/pruebas_individuales/'+ file_name)
	'''

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

	#import classes
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
				file_name = spec["test_name"].replace(' ', '_')
				try:
					order = spec["order"]
				except:
					pass
				try:
					scales = spec["scales"]
				except:
					pass
			except:
				print("existe un error en la configuración, verifique la configuración del experimento al principio del archivo data.yaml")
				return
		else:
			# Get actual class according to item type.
			class_name = spec['type'].replace(' ', '_')
			if class_name == "number" or class_name == "date" or class_name == "range":
				cls = classes.__dict__["text"]
			else:
				cls = classes.__dict__[class_name]    

			# Create object.
			new_item_object = cls(item_id.replace(' ', '_'), spec)

			# Add to list.
			items.append(cls(item_id.replace(' ', '_'), spec))

	#next(item for item in items if item["item_id"] == "papas_fritas")
	#for item in items: 
	#	print(item.__dict__)

	fullscreen_mode = False
	questions=[]
	instructions = []
	questions_cont = 0
	error = False
	ids = {}

	plugins = {
		"jspsych-survey-multi-choice-horizontal.js": False,
		"jspsych-survey-multi-choice-vertical.js": False,
		"jspsych-survey-text.js": False,
	}

	
	# order items
	# ---------------------------- TODO -----------------------------

	experiment = []
	# create test
	for i in range(len(items)):
		item_type = items[i].type
		if (item_type=="fullscreen"):
			try:
				base_text = items[i].arguments["text"]
			except:
				base_text = "El experimento entrará en modo pantalla completa"
			fullscreen = {"fullscreen_mode": True, "base_text": base_text}
			fullscreen_mode = True
		elif (item_type=="instruction"):
			actual_instruction = {}
			try:
				actual_instruction["title"] = items[i].arguments["title"]
			except:
				pass
			try:
				actual_instruction["instruction"] = items[i].arguments["text"]
			except:
				pass
			try:
				actual_instruction["random_mode"] = (items[i].arguments["questions_mode"] == "random")
			except:
				actual_instruction["random_mode"] = False
			actual_instruction["previous_questions"] = questions_cont
			instructions.append(actual_instruction)
		elif (item_type == "multi_choice") or (item_type=="text") or (item_type=="number")  or (item_type=="date") or (item_type == "range"):
			actual_question = {}

			actual_question["type"] = item_type
			#----------#
			# Activación de plugins
			if item_type == "multi_choice":
				try:
					actual_question["orientation"] = items[i].arguments["orientation"]
				except:
					actual_question["orientation"] = None	
				if actual_question["orientation"] == "vertical":
					plugins["jspsych-survey-multi-choice-vertical.js"] = True
				elif actual_question["orientation"] == "horizontal":
					plugins["jspsych-survey-multi-choice-horizontal.js"] = True
				else:
					print("ocurrió un error al seleccionar la orientacion de la pregunta de multi choice '"+items[i].item_id+"'")
					error = True
				try:
					if (type(items[i].arguments["choices"]) == list):
						actual_question["choices"] = items[i].arguments["choices"]
					elif (type(items[i].arguments["choices"]) == str):
						actual_question["choices"] = scales[items[i].arguments["choices"]]
				except:
					print("ocurrió un error al seleccionar las alternaticas de la pregunta de multi choice '"+items[i].item_id+"'")
					error = True

			elif item_type == "text" or item_type == "number" or item_type == "date" or (item_type == "range"):
				plugins["jspsych-survey-text.js"] = True
				try:
					actual_question["endword"] = items[i].arguments["endword"] 
				except:
					pass

				try:
					actual_question["error_message"] = items[i].arguments["error_message"] 
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
				actual_question["preamble"] = items[i].arguments["title"] 
			except:
				pass
			try:
				actual_question["text"] = items[i].arguments["text"] 
			except:
				pass

			if items[i].item_id in ids:
				ids[items[i].item_id] += 1
			else:
				ids[items[i].item_id] = 1
			actual_question["item_id"] = str(items[i].item_id) + "_" + str(ids[items[i].item_id])
			actual_question["previous"] = items[i].previous
			actual_question["next"] = items[i].next

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

	writeExperiment(file_name, instructions, questions, fullscreen=fullscreen)
	writeConfig(file_name)
	writeIndex(file_name, plugins)

	print("Prueba creada con éxito.")
	print("Iniciando testing de la prueba agregada...")
	testing(PATH, file_name)
	
if __name__ == '__main__' : main()


