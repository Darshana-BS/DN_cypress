import time

from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

# driver.get('https://rahulshettyacademy.com/angularpractice/')

# driver.find_element(By.NAME, "email").send_keys('dummysn@dm.com')
# driver.find_element(By.ID, "exampleInputPassword1").send_keys('12345')
# driver.find_element(By.ID,"exampleCheck1").click()

# # XPATH -> //tagname=[@attrbute = "value"]
# # driver.find_element(By.CLASS_NAME, "").click()
# driver.find_element(By.XPATH, "//input[@value='Submit']").click()


# # tagname[attribute='value']
# driver.find_element(By.CSS_SELECTOR, "input[name='name']").send_keys('DNss')

# # submit
# success_text = driver.find_element(By.CLASS_NAME, "alert-success").text
# print(success_text)

# # assertions
# assert "Success" in success_text

# # 
# driver.find_element(By.XPATH, "(//input[@type ='text'])[1]").send_keys('DN')
# driver.find_element(By.XPATH, "(//input[@type ='text'])[1]").clear()

# time.sleep(2)



driver.get('https://rahulshettyacademy.com/client/auth/login')
driver.find_element(By.LINK_TEXT, "Forgot password?").click()

