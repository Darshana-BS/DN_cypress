# login to bstackdemo website
import time

from selenium import webdriver
from selenium.webdriver import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome()

driver.get('https://www.bstackdemo.com/signin')
username = driver.find_element(By.XPATH,"//input[@id='react-select-2-input']")
username.send_keys('demo')
username.send_keys(Keys.ENTER)
password = driver.find_element(By.XPATH,'//input[@id="react-select-3-input"]')
password.send_keys('test')
password.send_keys(Keys.RETURN)

# sumbit
driver.find_element(By.ID, "login-btn").click()

# apply filter
driver.find_element(By.CSS_SELECTOR,"input[value='Apple']")


# drop-down filtering
# driver.find_element(By.CLASS_NAME, "sort")
# dropdown = Select(driver.find_element(By.CLASS_NAME, "sort"))
# dropdown.select_by_value('lowestprice')
# time.sleep(4)
