from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

# implicit wait
driver.implicitly_wait(4)
# visit url
driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

# login
driver.find_element(By.XPATH, "//input[@name='username']").send_keys('Admin')
driver.find_element(By.XPATH, "//input[@name='password']").send_keys('admin123')
driver.find_element(By.CSS_SELECTOR, "button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()

# visit adminpageurlhere
driver.find_element(By.XPATH, "(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]").click()

# find list of the users
list = driver.find_elements(By.XPATH, "//span[@class='oxd-checkbox-input oxd-checkbox-input--active --label-right oxd-checkbox-input']")
print(len(list))

# select a member checkbox
for i in range(len(list)):
    print (i)


