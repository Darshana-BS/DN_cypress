import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome()

# visti url
driver.get('https://rahulshettyacademy.com/AutomationPractice/')

# find element of radio bu
radio = driver.find_elements(By.CSS_SELECTOR, "input[type='radio']")

for i in radio:
    if i.get_attribute('value') == 'radio1':
        i.click()
        assert i.is_selected()
        break

secondradiobu = driver.find_elements(By.CLASS_NAME, "radioButton")
secondradiobu[2].click()
assert secondradiobu[2].is_selected()

# click on hide button
hiddne = driver.find_element(By.ID, "hide-textbox").click()

#find show button 
show = driver.find_element(By.ID, "show-textbox")

textbox = driver.find_element(By.ID, "displayed-text")
assert not textbox.is_displayed()

# assert access_hidden.is_displayed()
if textbox.is_displayed():
    textbox.send_keys('Hi')
else:
    show.click()
    textbox.send_keys('Hi')


time.sleep(2)
