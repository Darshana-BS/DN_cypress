import time

from selenium import webdriver
from selenium.webdriver.common.by import By

# a = 2
# b = 3
# sum = a + b

# try:
#     x  =  sum / 0
#     print('')
# except Exception as e:
#     print(e)



# {url}/users/list

# key: application/json

# form-data

driver = webdriver.Chrome()
driver.get('https://rahulshettyacademy.com/loginpagePractise/')

# implicit wait
time.sleep(4)
# driver.implicitly_wait(500)

# find usermane and send value

# find pasword and send value
driver.find_element(By.CSS_SELECTOR, "input[type='password']").send_keys('Admin')