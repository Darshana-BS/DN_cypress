import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome()

# visit url
driver.get('https://rahulshettyacademy.com/AutomationPractice/')

# find element checkbox value
checkbox = driver.find_elements(By.CSS_SELECTOR, "input[type='checkbox']")
print(len(checkbox))

# for check in checkbox:
for check in checkbox:
    if check.get_attribute('value') == 'option1':
        check.click()
        assert check.is_selected()
        break

secondcheckbox = driver.find_element(By.ID, "checkBoxOption2")
secondcheckbox.click()
assert secondcheckbox.is_selected()

time.sleep(2)
