# login to bstackdemo website
from selenium import webdriver
from selenium.webdriver import Keys
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

driver.get('https://www.bstackdemo.com/signin')
textbox = driver.find_element(By.CLASS_NAME, "css-1wa3eu0-placeholder")
textbox.send_keys(Keys.ARROW_DOWN)

# .send_keys('demo')

#.click()
# textbox.key_down(Keys.ARROW_DOWN).send_keys(Keys.ENTER)
# driver.find_element((By.ID, "#password")).send_keys('testingisfun99')