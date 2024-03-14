import time
from selenium import webdriver
# from selenium.webdriver.chrome.service import Service

# driver no
# service_dn = Service('/Users/darsh/Desktop/DN_cypress/chromedriver-mac-arm64/chromedriver')
# driver = webdriver.Chrome(service=service_dn)

driver = webdriver.Chrome()
driver.get('http://www.google.com')

driver.maximize_window()
print(driver.title)
print(driver.current_url)
time.sleep(2)