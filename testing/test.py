# --------------------------
#      Execute JavaScript
# --------------------------

import time, os, random, urllib.request
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By

# Para ver la imagen final instantaneamente al terminar una prueba
# from PIL import Image

# libreria de configuracion
from tests.testing_config.Configuration import BasicConfig

def main():

	# se busca el PATH que es la carpeta actual menos la parte de /testing
	PATH = '/'.join((os.getcwd().split('/'))[:-1])

	# palabras para un random
	f = open(PATH+'/testing/assets/words','r')
	words = f.readlines()
	f.close()

	config = BasicConfig()
	
	randomization = config.basic_config['random']
	if randomization:
		cont = random.randrange(10)
	else:
		multi = config.basic_config['multi']
		cont = config.basic_config['cont']
		words_cont = config.basic_config['word']

	# Si no existe la carpeta Downloads, es creada para guardar las pruebas
	if not os.path.exists('/'+PATH+'/testing/Downloads'):
		os.makedirs('/'+PATH+'/testing/Downloads')

	# Si no existe la carpeta de imagenes, es creada para guardar las fotos de la pantalla
	if not os.path.exists('/'+PATH+'/testing/Image'):
		os.makedirs('/'+PATH+'/testing/Image')

	# Creacion de driver de navegacion y configuraciones
	firefox_driver = os.path.join(os.getcwd(), '/'+PATH+'/testing/browser_drivers/geckodriver')

	profile = webdriver.FirefoxProfile();
	profile.set_preference('browser.download.folderList', 2)
	profile.set_preference('browser.download.manager.showWhenStarting', False)
	profile.set_preference('browser.download.dir', '/'+PATH+'/testing/Downloads')
	profile.set_preference('browser.helperApps.neverAsk.saveToDisk', 'text/plain, application/vnd.ms-excel, text/csv, text/comma-separated-values, application/octet-stream, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')	

	chrome_driver = PATH + "/testing/browser_drivers/chromedriver"
	chrome_options = Options()
	#chrome_options.add_argument("--headless")
	chrome_options.add_argument("--browser.helperApps.neverAsk.saveToDisk=text/plain, application/vnd.ms-excel, text/csv, text/comma-separated-values, application/octet-stream, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	chrome_options.add_argument("--browser.download.manager.showWhenStarting=False")
	chrome_options.add_argument('--browser.download.folderList=2')
	prefs = {'download.default_directory' : "/"+PATH+"/testing/Downloads"}
	chrome_options.add_experimental_option('prefs', prefs)

	print("Elija navegador para probar el testing:")
	print("1 - Chrome")
	print("2 - Firefox\n")
	driver_selection = int(input("- "))
	print("")

	# Se leen las pruebas por fila para poder hacer las pruebas
	file = open('/'+PATH+'/testing/test_list.txt', 'r') 

	for line in file: 

		if randomization:
			cont = random.randrange(10)
		else:
			multi = config.basic_config['multi']
			cont = config.basic_config['cont']
			words_cont = config.basic_config['word']

		if line[0] != '#' and line != '\n':

			print("Haciendo test: " + line.rstrip('\n'))
			if driver_selection == 1:
				driver = webdriver.Chrome(chrome_options=chrome_options, executable_path=chrome_driver)
			elif driver_selection == 2:	
				driver = webdriver.Firefox(firefox_profile=profile, executable_path=firefox_driver);

			driver.get('file:///'+PATH+'/pruebas_individuales/'+line+'/index.html')

			escape = ActionChains(driver)
			escape.send_keys(Keys.ESCAPE)

			next_page = ActionChains(driver)
			next_page.send_keys(Keys.TAB)
			next_page.send_keys(Keys.SPACE)
			next_page.send_keys(Keys.RETURN)

			next_page_box = ActionChains(driver)
			next_page_box.send_keys(Keys.TAB)
			next_page_box.send_keys(Keys.RETURN)

			
			path_to_watch = '/'+PATH+'/testing/Downloads'
			before = dict ([(f, None) for f in os.listdir (path_to_watch)])

			ronda = 0
			while True:
				ronda += 1
				txtfields = someElements = driver.find_elements(By.CLASS_NAME, 'jspsych-content')
				for field in txtfields:
					print("ronda " + str(ronda))
					print(field.text)
				try:
					# input box with text or number
					elem = driver.find_element_by_class_name("jspsych-survey-text-question")
					try:
						input_box = driver.find_element_by_xpath("//input[@type='number']")
						if randomization:
							cont = random.randrange(10)
						else:
							cont+=1
						input_box.send_keys(str(cont))
					except:
						try:
							input_box = driver.find_element_by_xpath("//input[@type='text']")
							if randomization:
								text = words[random.randrange(len(words))]
							else:
								text = 'palabra numero ' + str(words_cont)
								words_cont += 1
							input_box.send_keys(text)
						except:
							try:
								date = time.strftime('%m-%d-%Y')
								print(date)
								input_box = driver.find_element_by_xpath("//input[@type='date']")
								input_box.send_keys(date)
							except Exception as e:
								print(e)
					button = driver.find_element_by_id("jspsych-survey-text-next")
					button.click()
					elem1 = driver.find_element_by_class_name("jspsych-survey-text-question")
					if elem1 == elem:
						print("encontrada limitancia de numeros, reiniciando contador")
						input_box.clear()
						cont = 1
				except:
					pass

				try:
					# seleccion múltiple
					elem = driver.find_elements_by_name("jspsych-survey-multi-choice-horizontal-response-0")
					if len(elem) == 0:
						elem = driver.find_elements_by_name("jspsych-survey-multi-choice-vertical-response-0")
						choice = 0
					else:
						choice = 1

					if randomization:
						elem[random.randrange(len(elem))].click()
					else:
						if multi >= len(elem):
							multi = 0
						elem[multi].click()
						multi+=1
					if choice:
						button = driver.find_element_by_id("jspsych-survey-multi-choice-horizontal-next")
					else:
						button = driver.find_element_by_id("jspsych-survey-multi-choice-vertical-next")
					button.click()
				except:
					pass

				try:
					# solo texto
					button = driver.find_element_by_id("jspsych-instructions-next")
					button.click()
				except:
					pass

				try:
					# poner pantalla completa
					button = driver.find_element_by_id("jspsych-fullscreen-btn")
					button.click()
				except:
					pass
				
				after = dict ([(f, None) for f in os.listdir (path_to_watch)])
				added = [f for f in after if not f in before]
				if added: 
					print("Archivo nuevo almacenado en: "+path_to_watch+"/"+added[0])
					break

			
		    # ejecuta todas las acciones del actionchains
		    # actions.perform()

		    #elem.clear()
		    #elem.send_keys("python")
		    #elem.send_keys(Keys.RETURN)

		    # screenshot capture (it needs pillow)
			# image_path = "../Image/aislamiento_social_y_redes_sociales.png"
			# driver.get_screenshot_as_file(image_path)
			
			# close the browser
			driver.close()

			#img = Image.open(image_path)
			#img.show()
		else:
			if len(line.split(" ")) > 2:
				print(line[1:].rstrip('\n'))
			elif line != '\n':
				print('Se ha omitido la prueba ' + line[1:].rstrip('\n'))

if __name__ == '__main__' : main()