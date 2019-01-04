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

# Para ver la imagen final instantaneamente al terminar una prueba
from PIL import Image

# libreria de configuracion
from testing_config.Configuration import BasicConfig

def main():

	config = BasicConfig()

	PATH = config.basic_config['PATH']
	randomization = config.basic_config['random']
	if randomization:
		cont = random.randrange(10)
	else:
		multi = config.basic_config['multi']
		cont = config.basic_config['cont']

	# Si no existe la carpeta Downloads, es creada para guardar las pruebas
	if not os.path.exists('/'+PATH+'/testing/Downloads'):
		os.makedirs('/'+PATH+'/testing/Downloads')

	# Si no existe la carpeta de imagenes, es creada para guardar las fotos de la pantalla
	if not os.path.exists('/'+PATH+'/testing/Image'):
		os.makedirs('/'+PATH+'/testing/Image')

	firefox_driver = os.path.join(os.getcwd(), "../browser_drivers/geckodriver")

	profile = webdriver.FirefoxProfile();
	profile.set_preference('browser.download.folderList', 2)
	profile.set_preference('browser.download.manager.showWhenStarting', False)
	profile.set_preference('browser.download.dir', '/'+PATH+'/testing/Downloads')
	profile.set_preference('browser.helperApps.neverAsk.saveToDisk', 'text/plain, application/vnd.ms-excel, text/csv, text/comma-separated-values, application/octet-stream, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')	


	driver = webdriver.Firefox(firefox_profile=profile, executable_path=firefox_driver);

	# chrome_driver = os.path.join(os.getcwd(), "../browser_drivers/chromedriver")
	# chrome_options = Options()
	# chrome_options.add_argument("--headless")
	# chrome_options.add_argument("--window-size=1024x1400")

	# driver = webdriver.Chrome(chrome_options=chrome_options, executable_path=chrome_driver)

	driver.get('file:///'+PATH+'/pruebas_individuales/aislamiento_social_y_redes_sociales/index.html')

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
			# seleccion múltiple
			elem = driver.find_elements_by_name("jspsych-survey-multi-choice1-response-0")
			if randomization:
				elem[random.randrange(len(elem))].click()
			else:
				if multi >= len(elem):
					multi = 0
				elem[multi].click()
				multi+=1

			button = driver.find_element_by_id("jspsych-survey-multi-choice1-next")
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

if __name__ == '__main__' : main()