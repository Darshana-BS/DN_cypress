import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome()

# visit url
driver.get('https://rahulshettyacademy.com/angularpractice/')

# search drop-down element using xpath
dropdown = Select(driver.find_element(By.XPATH,"//select[@class='form-control']"))

# select the first drop-down value
dropdown.select_by_index(0)

# change selection to second value
selectd = dropdown.select_by_visible_text('Male')

# check selection

time.sleep(2)