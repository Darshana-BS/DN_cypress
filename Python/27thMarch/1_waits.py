import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait

# visit link
driver = webdriver.Chrome()
driver.get('https://rahulshettyacademy.com/seleniumPractise/#/')

# implicit wait #a
driver.implicitly_wait(2)

# search products
driver.find_element(By.XPATH, "//input[@type='search']").send_keys('be')

# find length
time.sleep(2)
products_list = driver.find_elements(By.XPATH, "//div[@class='product']")
print(len(products_list))

# add to cart
for product in products_list:
    product.find_element(By.XPATH, "div/button").click()

# go to cart
driver.find_element(By.CSS_SELECTOR, "a[class='cart-icon']").click()
driver.find_element(By.XPATH, "//button[text()='PROCEED TO CHECKOUT']").click()

# print cart amount
amount = driver.find_element(By.XPATH, "//span[@class='totAmt']")
print(amount.text)

# apply promocode
driver.find_element(By.CSS_SELECTOR, "input[type='text']").send_keys('rahulshettyacademy')
driver.find_element(By.XPATH, "//button[@class='promoBtn']").click()

# explicit wait
wait = WebDriverWait(driver, 10)
wait.until(expected_conditions.presence_of_element_located((By.CSS_SELECTOR, "span[class='promoInfo']")))
assert driver.find_element(By.CSS_SELECTOR, "span[class='promoInfo']").text == "Code applied ..!"

# cartvalue
# total_each = driver.find_elements(By.CSS_SELECTOR, "p[class='amount']")
#xpath = //tbody/tr[1]/td[5]
# css = td:nth-child(5)
# xpath = //td[5]
total_each = driver.find_elements(By.CSS_SELECTOR, "td:nth-child(5)")
total = 0
for price in total_each:
   total += int(price.text)

# get total
total_include = driver.find_element(By.CSS_SELECTOR, "span[class='totAmt']").text
assert total_include == total
