# --------------------------
#      Execute JavaScript
# --------------------------

import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import os
import random
import urllib.request

# Para ver la imagen final instantaneamente al terminar una prueba
# from PIL import Image

# libreria de configuracion
from tests.testing_config.Configuration import BasicConfig

def main():

	# palabras para un random
	word_url = "http://svnweb.freebsd.org/csrg/share/dict/words?view=co&content-type=text/plain"
	response = urllib.request.urlopen(word_url)
	long_txt = response.read().decode()
	words = long_txt.splitlines()

	config = BasicConfig()

	# se busca el PATH que es la carpeta actual menos la parte de /testing
	PATH = os.getcwd()[0:-8]
	
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

	# chrome_driver = os.path.join(os.getcwd(), "../browser_drivers/chromedriver")
	# chrome_options = Options()
	# chrome_options.add_argument("--headless")
	# chrome_options.add_argument("--window-size=1024x1400")

	# driver = webdriver.Chrome(chrome_options=chrome_options, executable_path=chrome_driver)

	# Se leen las pruebas por fila para poder hacer las pruebas
	file = open('/'+PATH+'/testing/test_list.txt', 'r') 

	for line in file: 

		if line[0] != '#' and line != '\n':

			print("Haciendo test: " + line.rstrip('\n'))

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

			while True:
				try:
					# input box with number
					elem = driver.find_element_by_class_name("jspsych-survey-text-number-question")
					input_box = driver.find_element_by_xpath("//input[@type='number']")
					input_box.send_keys(str(cont))
					button = driver.find_element_by_id("jspsych-survey-text-number-next")
					button.click()
					if randomization:
						cont = random.randrange(10)
					else:
						cont+=1
				except:
					pass

				try:
					# input box with text or number
					elem = driver.find_element_by_class_name("jspsych-survey-text-question")
					try:
						input_box = driver.find_element_by_xpath("//input[@type='number']")
						input_box.send_keys(str(cont))
					except:
						input_box = driver.find_element_by_xpath("//input[@type='text']")
						if randomization:
							text = words[random.randrange(len(words))]
						else:
							text = 'palabra numero ' + str(words_cont)
							words_cont += 1
						input_box.send_keys(text)
					button = driver.find_element_by_id("jspsych-survey-text-next")
					button.click()
					if randomization:
						cont = random.randrange(10)
					else:
						cont+=1
				except:
					pass

				try:
					# seleccion múltiple
					elem = driver.find_elements_by_name("jspsych-survey-multi-choice1-response-0")
					if len(elem) == 0:
						elem = driver.find_elements_by_name("jspsych-survey-multi-choice-response-0")
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
						button = driver.find_element_by_id("jspsych-survey-multi-choice1-next")
					else:
						button = driver.find_element_by_id("jspsych-survey-multi-choice-next")
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