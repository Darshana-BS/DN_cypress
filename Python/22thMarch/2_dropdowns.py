import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome()

driver.get('https://rahulshettyacademy.com/angularpractice/')

# enter password
driver.find_element(By.XPATH, "(//input[@class='form-control'])[1]" ).send_keys("test@123")

# drop-down
drop_down = Select(driver.find_element(By.XPATH, "//select[@class='form-control']"))
drop_down.select_by_index(1)
drop_down.select_by_visible_text('Male')
time.sleep(2)