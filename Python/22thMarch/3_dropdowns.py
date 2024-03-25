import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome()

# visit website
driver.get('https://rahulshettyacademy.com/dropdownsPractise/')

# get dropddonw
# dropdown = driver.find_element(By.XPATH, "(//input[@class='select_CTXT'])[1]")
dropdown = driver.find_element(By.XPATH, "(//input[@type='text'])[1]")
dropdown.send_keys('Ind')
time.sleep(2)

countries = driver.find_elements(By.CSS_SELECTOR, "li[class='ui-menu-item'] a")
print(len(countries))

for i in countries:
    if i.text == 'India':
        i.click()
        break

assert dropdown.get_attribute('value') =='India'
