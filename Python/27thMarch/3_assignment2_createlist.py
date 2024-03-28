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


# add the elements to the list
expected_list = ['Cucumber - 1 Kg', 'Beetroot - 1 Kg', 'Beans - 1 Kg', 'Raspberry - 1/4 Kg', 'Strawberry - 1/4 Kg']
products = []

# product name
def ProductName():
    for i in range(len(products_list)):
        pname = driver.find_element(By.XPATH, "(//h4[@class='product-name'])[" + str(i+1) + "]").text
        print(pname)
        products.append(pname)
        print(products)

ProductName()

assert expected_list == products

    # product_name = pname.text[i]
    # print(product_name)
    # products.append(product_name) 
    # print (products)


# for i in range(len(products_list)):
    