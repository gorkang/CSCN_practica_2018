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

	#chrome_options = Options()
	#chrome_options.add_argument("--headless")
	#chrome_options.add_argument("--window-size=1024x1400")

	firefox_driver = os.path.join(os.getcwd(), "../browser_drivers/geckodriver")

	profile = webdriver.FirefoxProfile();
	profile.set_preference("browser.download.folderList", 2)
	profile.set_preference("browser.download.manager.showWhenStarting", False)
	profile.set_preference("browser.download.dir", PATH)
	profile.set_preference("browser.helperApps.neverAsk.saveToDisk", "text/csv")

	driver = webdriver.Firefox(firefox_profile=profile, executable_path=firefox_driver);

	# download Chrome Webdriver  
	# https://sites.google.com/a/chromium.org/chromedriver/download
	# put driver executable file in the script directory
	#chrome_driver = os.path.join(os.getcwd(), "../browser_drivers/chromedriver")

	#driver = webdriver.Chrome(chrome_options=chrome_options, executable_path=chrome_driver)


	#driver = webdriver.Firefox(executable_path=firefox_driver)

	driver.get("file:///"+PATH+"/pruebas_individuales/aislamiento_social_y_redes_sociales/index.html")
	#assert "GitHub".lower() in driver.title.lower()

	# scrap info
	#h1_elem = driver.find_element_by_tag_name("h1")
	#print(h1_elem.text)

	# fill and submit form
	#elem = driver.find_element_by_id("jspsych-content")
	# lectura de texto
	# print(elem.get_attribute('innerHTML'))

	#print(elem.get_attribute('innerHTML'))

	enter = ActionChains(driver)
	enter.send_keys(Keys.RETURN)
	enter.perform()

	next_page = ActionChains(driver)
	next_page.send_keys(Keys.TAB)
	next_page.send_keys(Keys.SPACE)
	next_page.send_keys(Keys.RETURN)

	next_page_box = ActionChains(driver)
	next_page_box.send_keys(Keys.TAB)
	next_page_box.send_keys(Keys.RETURN)

	next_page.perform()
	cont = 0
	while cont < 65:
		cont+=1
		try:
			input_box = driver.find_element_by_xpath("//input[@type='number']")
			input_box.send_keys(str(1))
			next_page_box.perform()
		except Exception as e:
			next_page.perform()

	#for x in range(0, 5):
	#	elem = driver.find_element_by_class_name("jspsych-survey-multi-choice1-text")
	#	print(elem.get_attribute('innerHTML'))
	#	next_page.perform()
	
	#for x in range(0,10):
	#	elem = driver.find_element_by_class_name("justified")
	#	for i in range(0, len(elem.get_attribute('innerHTML').split("<br>"))):
	#		if elem.get_attribute('innerHTML').split("<br>")[i] != '':
	#			print(elem.get_attribute('innerHTML').split("<br>")[i])
	#	input_box = driver.find_element_by_xpath("//input[@type='number']")
	#	input_box.send_keys(str(1))
	#	next_page_box.perform()

	#for x in range(0, 2):
	#	elem = driver.find_element_by_class_name("jspsych-survey-multi-choice1-text")
	#	print(elem.get_attribute('innerHTML'))
	#	next_page.perform()

	#next_page_box.perform()

	#for x in range(0, 8):
	#	elem = driver.find_element_by_class_name("justified")
	#	for i in range(0, len(elem.get_attribute('innerHTML').split("<br>"))):
	#		if elem.get_attribute('innerHTML').split("<br>")[i] != '':
	#			print(elem.get_attribute('innerHTML').split("<br>")[i])
	#	next_page.perform()

	#next_page_box.perform()

	#for x in range(0, 11):
	#	elem = driver.find_element_by_class_name("justified")
	#	for i in range(0, len(elem.get_attribute('innerHTML').split("<br>"))):
	#		if elem.get_attribute('innerHTML').split("<br>")[i] != '':
	#			print(elem.get_attribute('innerHTML').split("<br>")[i])
	#	next_page.perform()

	#next_page_box.perform()

	#for x in range(0, 6):
	#	elem = driver.find_element_by_class_name("jspsych-survey-multi-choice1-text")
	#	print(elem.get_attribute('innerHTML'))
	#	next_page.perform()

	#next_page_box.perform()

	#for x in range(0, 10):
	#	elem = driver.find_element_by_class_name("jspsych-survey-multi-choice1-text")
	#	print(elem.get_attribute('innerHTML'))
	#	next_page.perform()

	#for x in range(0, 10):
#		elem = driver.find_element_by_class_name("jspsych-survey-multi-choice1-text")
#		print(elem.get_attribute('innerHTML'))
#		next_page.perform()

	#for x in range(0, 2):
	#    actions = ActionChains(driver)
	#    actions.send_keys(Keys.DOWN)
    #    actions.perform()
    #    elem = driver.find_element_by_id("jspsych-content")
    #    print(elem.get_attribute('innerHTML'))

     

    # ejecuta todas las acciones del actionchains
    # actions.perform()

    #elem.clear()
    #elem.send_keys("python")
    #elem.send_keys(Keys.RETURN)

    # screenshot capture
	image_path = "../images/aislamiento_social_y_redes_sociales.png"
	driver.get_screenshot_as_file(image_path)
	#driver.close()

	#img = Image.open(image_path)
	#img.show()

if __name__ == '__main__' : main()