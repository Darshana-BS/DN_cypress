import time

from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait

# visit link
driver = webdriver.Chrome()
driver.get('https://rahulshettyacademy.com/AutomationPractice/')

# maximize window
driver.maximize_window()

# implicit wait #a
driver.implicitly_wait(2)

# actions
actions = ActionChains(driver)

# hover (also move_to_element works here)
actions.click_and_hold(driver.find_element (By.CSS_SELECTOR, "#mousehover")).perform()
# move to element
actions.move_to_element(driver.find_element(By.LINK_TEXT, "Reload")).click().perform()
# actions.move_to_element(driver.find_element(By.CSS_SELECTOR, "div[class='mouse-hover-content'] a:nth-child(2)")).click().perform()

# right click
actions.click_and_hold(driver.find_element (By.CSS_SELECTOR, "#mousehover")).perform()
actions.context_click(driver.find_element (By.LINK_TEXT, "Top")).perform()

# double click
actions.double_click(driver.find_element(By.CSS_SELECTOR, "input[id ='checkBoxOption1']")).click().perform()
