from selenium import webdriver
from selenium.webdriver import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions

driver = webdriver.Chrome()


# visit enviornment
driver.get('https://alpha-trunk.radixhealth.com/dash/self2/#/provider-search')
driver.implicitly_wait(5)

# select new patient option
driver.find_element(By.XPATH, "(//button[@igxbutton='raised'])[2]").click()
driver.find_element(By.XPATH, "(//button[@igxbutton='raised'])[3])").click()
# driver.save_screenshot("2ndpage.png")

driver.implicitly_wait(5)

# enter the details on screen 1




