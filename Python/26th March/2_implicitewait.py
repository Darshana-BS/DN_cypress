import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome()
driver.get('https://rahulshettyacademy.com/seleniumPractise/#/')

# implicit wait
driver.implicitly_wait(5)
# search items
driver.find_element(By.CLASS_NAME, 'search-keyword').send_keys('be')

# find length
time.sleep(2)
# prod = driver.find_elements(By.XPATH, '//h4[@class="product-name"]')
prod = driver.find_elements(By.XPATH, "//div[@class='products']/div")
print(len(prod))
assert len(prod) > 0

# add all searched items to cart
for product in prod:
    product.find_element(By.XPATH, "div/button").click()

# visit cart
cart = driver.find_element(By.XPATH, "//img[@alt='Cart']").click()
# cartdata = driver.find_element(By.XPATH, "(//button[normalize-space()='PROCEED TO CHECKOUT'])").click()
cartdata = driver.find_element(By.XPATH, "//button[text()='PROCEED TO CHECKOUT']").click()
print(driver.current_url)

# apply promocode
driver.find_element(By.CSS_SELECTOR, "input[placeholder='Enter promo code']").send_keys('rahulshettyacademy')
driver.find_element(By.CLASS_NAME, "promoBtn").click()
assert driver.find_element(By.CLASS_NAME, "promoInfo").text == 'Code applied ..!'

time.sleep(4)