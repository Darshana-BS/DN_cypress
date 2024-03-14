import time
from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# service_obj = Service('/Users/darsh/Desktop/DN_cypress/chromedriver-mac-arm64/chromedriver')
# driver = webdriver.Chrome(service=service_obj)

# driver1 = webdriver.Chrome()
driver1 = webdriver.Safari()

driver1.get('http://www.google.com')
driver1.maximize_window()  #maximize window
print(driver1.title)       #print title of page
print(driver1.current_url) #print url of page

time.sleep(2)  # Allow time for the browser to open and wait for 2 seconds