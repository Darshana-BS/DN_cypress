import time

from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait

# visit link
driver = webdriver.Chrome()
driver.get('https://the-internet.herokuapp.com/windows')

# maximize window
driver.maximize_window()

# find clicklink
driver.find_element(By.LINK_TEXT, "Click Here").click()

# find widnows shown list
widnows = driver.window_handles
print(len(widnows))

# switch to window child
child = driver.switch_to.window(widnows[1])
# find title of window
print(driver.find_element(By.TAG_NAME, "h3").text)
# close child window opened
driver.close()

# switch to parent window
praent = driver.switch_to.window(widnows[0])
prarent_text = (driver.find_element(By.TAG_NAME, "h3").text)

# assertion
assert prarent_text == "Opening a new window"
print(driver.title)


