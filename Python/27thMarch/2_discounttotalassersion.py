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
# driver.find_element(By.CSS_SELECTOR, "input[type='text']").send_keys('rahulshettyacademy')
# driver.find_element(By.XPATH, "//button[@class='promoBtn']").click()

# explicit wait
# wait = WebDriverWait(driver, 10)
# wait.until(expected_conditions.presence_of_element_located((By.CSS_SELECTOR, "span[class='promoInfo']")))
# assert driver.find_element(By.CSS_SELECTOR, "span[class='promoInfo']").text == "Code applied ..!"

# total amount without discount
total_no_discount = float(driver.find_element(By.CSS_SELECTOR, ".totAmt").text) #""
print ('Amount total: ', total_no_discount)

# discount total
after_discount = float(driver.find_element(By.CSS_SELECTOR, "span[class='discountAmt']").text)
print("Amount discount added is: ", after_discount)

# total with discount < total without discount
# assert after_discount < total_no_discount
try:
    assert after_discount <= total_no_discount
    print('The total amount is greater than total value')
except AssertionError as e:
    print(e)