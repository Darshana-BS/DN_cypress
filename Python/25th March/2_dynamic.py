import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome()

# visti url
driver.get('https://rahulshettyacademy.com/dropdownsPractise/')

# find element
dropdown = driver.find_element(By.ID, 'autosuggest')
dropdown.send_keys('ind')
time.sleep(2)

# get the suggested list of dropdown value
list_country = driver.find_elements(By.CSS_SELECTOR, "li[class='ui-menu-item'] a")
print(len(list_country))

# iterate over list shown
for name in list_country:
    if name.text == 'India':
        name.click()
        break

# check value
assert dropdown.get_attribute('value') == 'India'