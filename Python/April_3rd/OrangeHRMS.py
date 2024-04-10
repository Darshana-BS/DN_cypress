import time

from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait

driver = webdriver.Chrome()

# implicit wait
driver.implicitly_wait(5)
# visit url
driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

# login
driver.find_element(By.XPATH, "//input[@name='username']").send_keys('Admin')
driver.find_element(By.XPATH, "//input[@name='password']").send_keys('admin123')
driver.find_element(By.CSS_SELECTOR, "button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()

# visit adminpageurlhere
driver.find_element(By.XPATH, "(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]").click()
time.sleep(4)
driver.refresh()

# create a user
driver.find_element(By.CSS_SELECTOR, "div[class='orangehrm-header-container'] button[type='button']").click()

dropdown = driver.find_element(By.XPATH, "(//div[@class='oxd-select-text oxd-select-text--active'])[1]")
dropdown.click()
time.sleep(4)
# wait = WebDriverWait(driver, 8)
# wait.until(expected_conditions.element_located_to_be_selected((By.XPATH, "//div[@role='listbox']")))

# select downarrow
actions = ActionChains(driver)
actions.key_down(Keys.CONTROL)
actions.send_keys(Keys.ENTER)  # close the dropdown after selecting an
actions.key_up(Keys.CONTROL)
# actions.perform()
# assert dropdown.get_attribute('Value') == 'Admin'

# add valuefor Status
status = driver.find_element(By.XPATH, "(//div[@class='oxd-select-text-input'])[2]")
actions.key_down(Keys.CONTROL)
actions.send_keys(Keys.END)

# enter user anme and password
driver.find_element(By.XPATH, "(//input[@class='oxd-input oxd-input--active'])[2]").send_keys('Darshana')
driver.find_element(By.XPATH, "(//input[@type='password'])[1]").send_keys('Darshana@805')
driver.find_element(By.XPATH, "(//input[@type='password'])[2]").send_keys('Darshana@805')

# select employee name
driver.find_element(By.XPATH, "//input[@placeholder='Type for hints...']").send_keys('Test')
actions.key_down(Keys.DOWN)
actions.send_keys(Keys.ENTER)

# submit
driver.find_element(By.XPATH, "//button[@type='submit']").click()
time.sleep(4)

# find list of the users explicit wait
# wait = WebDriverWait(driver, 8)
# wait.until(expected_conditions.presence_of_element_located((By.CSS_SELECTOR, "div[class='oxd-table-card'] div:nth-child(2)")))
# # list = driver.find_elements(By.XPATH, "//span[@class='oxd-checkbox-input oxd-checkbox-input--active --label-right oxd-checkbox-input']")
# list = driver.find_elements(By.CSS_SELECTOR, "div[class='oxd-table-card'] div:nth-child(2)")
# print(len(list))

# # select a member checkbox
# users = []
# for i in range(len(list)):
#     users.append(list[i].text)
#     print (users)
#     if list[i].text=='testusr9':
#         checkbox = driver.find_element(By.CSS_SELECTOR, "input[type='checkbox']").click

# # check if box clicked
# if checkbox.is_selected():
#     print ('Checked darshana')
# else:
#     print ('Not checked')



