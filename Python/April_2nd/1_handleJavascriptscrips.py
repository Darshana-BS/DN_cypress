import time
from selenium import webdriver

# headless mode code needed to handle the headless mode
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--headless")
driver = webdriver.Chrome(options=chrome_options)

# implicit wait
driver.implicitly_wait(2)

# visit link
url = driver.get('https://rahulshettyacademy.com/AutomationPractice/')

# use javascript scripts using python
driver.execute_script("window.scrollBy(0,document.body.scrollHeight);")
time.sleep(1)  # sleep for 1
driver.save_screenshot('JS.png')

