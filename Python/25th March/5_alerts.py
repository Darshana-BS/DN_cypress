import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome()

# visti url
driver.get('https://rahulshettyacademy.com/AutomationPractice/')

name = 'DN'
# add value and click click alert
valueDN = driver.find_element(By.ID, "name")
valueDN.send_keys(name) #''
driver.find_element(By.ID, "alertbtn").click()

# handle the alert shown
alert_shown = driver.switch_to.alert
print(alert_shown.text)
assert alert_shown.text == 'Hello DN, share this practice page and share your knowledge'

# click OK
alert_shown.accept()

# confirm the alert shown
valueDN.send_keys(name)
driver.find_element(By.XPATH, "//input[@value ='Confirm']").click()
alert_shown2 = driver.switch_to.alert
print(alert_shown2.text)
assert name in alert_shown2.text
alert_shown2.dismiss()

print(driver.title)
print(driver.current_url)

time.sleep(2)
