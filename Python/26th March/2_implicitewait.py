import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome()
driver.get('https://rahulshettyacademy.com/seleniumPractise/#/')

# search items
driver.find_element(By.CLASS_NAME, 'search-keyword').send_keys('be')
time.sleep(2)

# find length
# prod = driver.find_elements(By.XPATH, '//h4[@class="product-name"]')
prod = driver.find_elements(By.XPATH, "//div[@class='products']/div")
print(len(prod))
assert len(prod) > 0

for product in prod:
    driver.find_element(By.XPATH, "//div[@class='products']/div/div/button").click()

from productslist import cartTotal
cartTotal()