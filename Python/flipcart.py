from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))
driver.get("https://www.flipkart.com/")
searchbox = driver.find_element("xpath","//input[@class = 'Pke_EE']")
# driver.save_screenshot("screenshot-1.png")
searchbox.send_keys("Tata teat premium")
# driver.save_screenshot("screenshot-2.png")
driver.find_element("xpath", "//button[@class = '_2iLD__']" ).click()

driver.close() 