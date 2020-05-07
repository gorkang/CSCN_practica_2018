import shutil, math, os, subprocess, yaml, importlib
from subprocess import PIPE, Popen, STDOUT
from pathlib import Path

def writeExperiment(file_name, instructions, questions, fullscreen={"fullscreen_mode": False}):
	PATH = os.getcwd()
	f = open(PATH + '/'+ file_name + '/experiment.js', 'r')
	content = f.readlines()
	f.close()

	breaker = 0

	# inicio documento en linea 19
	document_actual_line = 19

	plugins = {
		"multi_choice_horizontal":"jspsych-survey-multi-choice-horizontal",
		"multi_choice_vertical":"jspsych-survey-multi-choice-vertical",
		"multi_text":"jspsych-cloze",
		"slider": "jspsych-html-slider-response",
		"text":"jspsych-survey-text",
		"number":"jspsych-survey-text",
		"date":"jspsych-survey-text"
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

			# *************
			if questions[i]["type"] == "multi_choice":
				# actual question plugin:
				content.insert(document_actual_line + 1, "  type: '"+ plugins[questions[i]["type"] + "_" + questions[i]["orientation"] ][8:] +"',\n")
				content.insert(document_actual_line + 2, "  questions: [{prompt: "+'"'+"<div class='justified'>" + questions[i]["text"] + "</div>"+'"'+", options: ['"+ "', '".join(questions[i]["choices"]) +"'], required: true, horizontal: " + str(questions[i]["orientation"] == "horizontal").lower() + "}],\n")
			elif questions[i]["type"] == "text" or questions[i]["type"] == "number" or questions[i]["type"] == "date":
				# actual question plugin:
				content.insert(document_actual_line + 1, "  type: '"+ plugins[questions[i]["type"]][8:] +"',\n")
				content.insert(document_actual_line + 2, "  questions: [{prompt: "+'"'+"<div class='justified'>" + questions[i]["text"] + "</div>" +'"'+", type: '"+ questions[i]["type"] +"', required: true}], \n")
			elif questions[i]["type"] == "multi_text":
				# actual question plugin:
				content.insert(document_actual_line + 1, "  type: '"+ plugins[questions[i]["type"]][8:] +"',\n")
				content.insert(document_actual_line + 2, "  text: "+'"'+"<div class='justified'>" + questions[i]["text"] + "</div>" +'"'+', required: true, \n')
			elif questions[i]["type"] == "slider":
				# actual question plugin:
				content.insert(document_actual_line + 1, "  type: '"+ plugins[questions[i]["type"]][8:] +"',\n")
				content.insert(document_actual_line + 2, "  stimulus: "+'"'+"<div class='justified'>" + questions[i]["text"] + "</div></br>" +'"'+', required: true, min: ' + str(questions[i]["min"]) + ', max: ' + str(questions[i]["max"]) + ', slider_width: ' + str(questions[i]["slider_width"]) + ', start: ' + str(questions[i]["start"]) + ', step: ' + str(questions[i]["step"]) + ', labels: ["' + '", "'.join(questions[i]["labels"]) + '"], button_label: "' + questions[i]["next_button"] +  '",\n')
			# *************
			content.insert(document_actual_line + 3, "  data: {trialid: '"+ questions[i]["item_id"] +"_"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +"'}\n")
			content.insert(document_actual_line + 4, "};\n")

			content.insert(document_actual_line + 5, "questions_experiment.push(question"+ ("{:0"+str(len(str(abs(len(questions)))))+"d}").format(i+1) +");\n")
			content.insert(document_actual_line + 6, "\n")
			document_actual_line += 7
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
	lines = file.readlines()
	file.close()

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

	os.system("pipenv shell python3 "+'/'+ str(Path(PATH).parents[0]) + '/testing/test.py')
	#p = Popen(str(Path(PATH).parents[2])+"/.pyenv/bin/pipenv shell", stdin=PIPE)   # set environment, start new shell
	#p.communicate('python3 '+'/'+ str(Path(PATH).parents[0]) + '/testing/test.py\n\nexit')

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

		# Get experiment configuration
		if item_id == "test configuration":
			try:
				file_name = spec["test_name"].replace(' ', '_')
				order = spec["order"]
				scales = spec["scales"]
			except:
				print("Existe un error en la configuración, verifique la configuración del experimento al principio del archivo data.yaml")
				return
		else:
			# Get actual class according to item type.
			class_name = spec['type'].replace(' ', '_')
			if class_name == "number" or class_name == "date":
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

	# set actual state (read file name, read questions, read answers)
	state = 0
	fullscreen_mode = False
	random_mode_selected = False
	questions=[]
	question_statement_selected = False
	horizontal_type_selected=False
	instructions = []
	instruction_title = True
	questions_cont = 0
	alternative_horizontal = False
	alternative_vertical = False
	alternative_answers_horizontal = []
	alternative_answers_vertical = []
	error = False

	plugins = {
		"jspsych-survey-multi-choice-horizontal.js": False,
		"jspsych-survey-multi-choice-vertical.js": False,
		"jspsych-survey-text.js": False,
		"jspsych-cloze.js":False,
		"jspsych-html-slider-response.js": False
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
		elif (item_type == "multi_choice") or (item_type=="text") or (item_type=="number")  or (item_type=="date")  or (item_type=="multi_text") or (item_type=="slider"):

			actual_question = {}

			actual_question["item_id"] = items[i].item_id
			actual_question["type"] = item_type
			try:
				actual_question["orientation"] = items[i].arguments["orientation"]
			except:
				actual_question["orientation"] = None
			#----------#
			# Activación de plugins
			if actual_question["type"] == "multi_choice":
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

			elif actual_question["type"] == "text" or actual_question["type"] == "number" or actual_question["type"] == "date":
				plugins["jspsych-survey-text.js"] = True
			elif actual_question["type"] == "multi_text":
				plugins["jspsych-cloze.js"] = True
			elif actual_question["type"] == "slider":
				plugins["jspsych-html-slider-response.js"] = True
				try:
					actual_question["min"] = items[i].arguments["min"]
				except:
					actual_question["min"] = 0
				try:
					actual_question["max"] = items[i].arguments["max"]
				except:
					actual_question["max"] = 100
				try:
					actual_question["start"] = items[i].arguments["start"]
				except:
					actual_question["start"] = 50
				try:
					actual_question["step"] = items[i].arguments["step"]
				except:
					actual_question["step"] = 1
				try:
					actual_question["labels"] = items[i].arguments["labels"]
				except:
					actual_question["labels"] = []
				try:
					actual_question["next_button"] = items[i].arguments["next_button"]
				except:
					actual_question["next_button"] = "Siguiente"
				try:
					actual_question["prompt"] = items[i].arguments["prompt"]
				except:
					actual_question["prompt"] = None
				try:
					actual_question["slider_width"] = items[i].arguments["slider_width"]
				except:
					actual_question["slider_width"] = None

			try:
				actual_question["preamble"] = items[i].arguments["preamble"]
			except:
				pass
			try:
				actual_question["text"] = items[i].arguments["text"]
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
	#print("Iniciando testing de la prueba agregada...")
	#testing(PATH, file_name)

if __name__ == '__main__' : main()
