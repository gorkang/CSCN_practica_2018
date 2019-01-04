# --------------------------
#      Execute JavaScript
# --------------------------

import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import os

def main():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--window-size=1024x1400")

    # download Chrome Webdriver  
    # https://sites.google.com/a/chromium.org/chromedriver/download
    # put driver executable file in the script directory
    chrome_driver = os.path.join(os.getcwd(), "chromedriver")

    driver = webdriver.Chrome(chrome_options=chrome_options, executable_path=chrome_driver)

    driver.get("file:///home/herm4nv/Documents/CSCN/pruebas_individuales/empatia_por_dolor/index.html")
    #assert "GitHub".lower() in driver.title.lower()
    
    # scrap info
    #h1_elem = driver.find_element_by_tag_name("h1")
    #print(h1_elem.text)

    # fill and submit form
    elem = driver.find_element_by_id("jspsych-content")
    # lectura de texto
    # print(elem.get_attribute('innerHTML'))

    print(elem.get_attribute('innerHTML'))

    for x in range(0, 2):
        actions = ActionChains(driver)
        actions.send_keys(Keys.DOWN)
        actions.perform()
        elem = driver.find_element_by_id("jspsych-content")
        print(elem.get_attribute('innerHTML'))

    for x in range(0, 2):
        actions = ActionChains(driver)
        actions.send_keys(Keys.LEFT)
        actions.perform()

    # TODO: problemas con el cambio de página luego de mover la barra
    for x in range(0, 3):
        actions = ActionChains(driver)
        actions.send_keys(Keys.DOWN)
        actions.perform()
        elem = driver.find_element_by_id("jspsych-content")
        print(elem.get_attribute('innerHTML'))
     

    # ejecuta todas las acciones del actionchains
    # actions.perform()

    #elem.clear()
    #elem.send_keys("python")
    #elem.send_keys(Keys.RETURN)

    # screenshot capture
    driver.get_screenshot_as_file("empatia_por_dolor.png")
    driver.close()

if __name__ == '__main__' : main()