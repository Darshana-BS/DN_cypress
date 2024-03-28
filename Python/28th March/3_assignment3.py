from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.select import Select
from selenium.webdriver.support.wait import WebDriverWait

driver = webdriver.Chrome()
driver.get('https://rahulshettyacademy.com/loginpagePractise/')
driver.implicitly_wait(2)

# click the url
driver.find_element(By.LINK_TEXT, "Free Access to InterviewQues/ResumeAssistance/Material").click()

# switch widnow
windows_list = driver.window_handles
# print(windows_list)

child = driver.switch_to.window(windows_list[1])
email= driver.find_element(By.XPATH, "//p[@class='im-para red']/strong/a").text
print(email)
driver.close()

# switch to parent window
parent = driver.switch_to.window(windows_list[0])
# enter email id and submit form
driver.find_element(By.ID, "username").send_keys(email)
# enter password
password = "learning"
driver.find_element(By.ID, "password").send_keys(password)
# select raddio button
driver.find_element(By.XPATH, "(//span[@class='checkmark'])[1]").click()
# select checbox
driver.find_element(By.XPATH, "//input[@id='terms']").click()

# select drop-down
# dropdown = driver.find_element(By.CSS_SELECTOR, "div[class='form-group'] select option:nth-child(1)")
dropdown = Select(driver.find_element(By.XPATH, "//select[@class='form-control']"))
dropdown.select_by_index(0)
dropdown.select_by_visible_text('Student')

# take screenshot
driver.save_screenshot('dn.png')

# submit do the login now
driver.find_element(By.NAME, "signin").click()

#  explicit wait
wait = WebDriverWait(driver, 10)
alert = wait.until(expected_conditions.visibility_of_element_located((By.CSS_SELECTOR, ".alert-danger")))
print('alert text is this: ', alert.text)

# assert or print error shown with
assert alert.text == "Incorrect username/password."
