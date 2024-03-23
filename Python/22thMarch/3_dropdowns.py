from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome()

# visit website
driver.get('https://rahulshettyacademy.com/dropdownsPractise/')

# get dropddonw
dropdown = driver.find_element(By.XPATH, "(//input[@class='select_CTXT'])[1]")
