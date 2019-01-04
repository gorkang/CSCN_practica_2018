# --------------------------
#      Execute JavaScript
# --------------------------

import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import os

# Para ver la imagen final instantaneamente al terminar una prueba
from PIL import Image

# libreria de configuracion
from testing_config.Configuration import BasicConfig

def main():

	config = BasicConfig()

	PATH = config.basic_config['PATH']

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

	next_page_box.perform()
	next_page_box.perform()
	next_page_box.perform()
	escape.perform()

	while True:
		try:
			input_box = driver.find_element_by_xpath("//input[@type='number']")
			input_box.send_keys(str(1))
			next_page_box.perform()
		except Exception as e:
			next_page.perform()
		
		after = dict ([(f, None) for f in os.listdir (path_to_watch)])
		added = [f for f in after if not f in before]
		if added: 
			print("Archivo nuevo almacenado en: "+path_to_watch+"/"+added[0])
			break

    # screenshot capture (it needs pillow)
	# image_path = "../images/aislamiento_social_y_redes_sociales.png"
	# driver.get_screenshot_as_file(image_path)
	
	# close the browser
	driver.close()

	#img = Image.open(image_path)
	#img.show()

if __name__ == '__main__' : main()