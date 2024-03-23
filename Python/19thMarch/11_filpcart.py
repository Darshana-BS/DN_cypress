# login
import time

from selenium import webdriver
from selenium.webdriver import Keys
from selenium.webdriver.common.by import By
import csv

import os
if os.path.exists('flipcartProducts.csv'):
    os.remove('flipcartProducts.csv')
else:
    print('Does not exists')

driver = webdriver.Chrome()

# visit website for flipcart
driver.get('https://www.flipkart.com/')

# search product
searchProduct = driver.find_element(By.XPATH, "//input[@type='text']")
searchProduct.send_keys('Tata tea premium')
searchProduct.send_keys(Keys.ENTER)

# print the name of product
def productListWrite():
    with open('flipcartProducts.csv', 'w', newline='') as fileProducts:                           # Open CSV file in write mode
        csvwriter = csv.writer(fileProducts)                                                      # Set the delimiter as space
        for i in range(1,11):
            productList = driver.find_element(By.XPATH, "(//a[@class='s1Q9rs'])["+str(i)+"]")     # xpath with changing index
            product_name = productList.text.strip()
            csvwriter.writerow([product_name])   
            print('Product Name for', i, 'th product is:', product_name)


# # find url of product
def url():
    with open('flipcartProducts.csv', 'a', newline='') as fileProducts:                           # Open CSV file in write mode
        csvwriter = csv.writer(fileProducts)
        for i in range(1,11):            
            urlElement = driver.find_element(By.XPATH, "(//a[@class='_8VNy32'])["+str(i)+"]")
            url = urlElement.get_attribute('href')
            csvwriter.writerow([url])
            print('Product url for', i, 'th product is:', url)

# print price
def Price():
    with open('flipcartProducts.csv', 'a', newline='') as fileProducts:                           # Open CSV file in write mode
        csvwriter = csv.writer(fileProducts)
        for i in range(1,11):            
            price = driver.find_element(By.XPATH, "(//a[@class='_8VNy32'])["+str(i)+"]")
            csvwriter.writerow([price.text])

#Ratingwrite
def ratings():
    with open('flipcartProducts.csv', 'a', newline='') as rating:
        csvwriter = csv.writer(rating)
        for i in range (1, 11):
            ratings = driver.find_element(By.XPATH, "(//span[@class='_1lRcqv'])["+str(i)+"]")
            csvwriter.writerow([ratings.text])

productListWrite()
url()
Price()
ratings()


# wait page
time.sleep(5)