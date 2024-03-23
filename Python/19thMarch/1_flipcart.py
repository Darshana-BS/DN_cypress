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
productList = driver.find_element(By.XPATH, "(//a[@class='s1Q9rs'])[1]")  # index starts from 1
print(productList.text)

# write the name of product to the csv file
fileProducts = open('flipcartProducts', 'w')
fileProducts.write(productList.text)
print(fileProducts)

# find url of product
urlElement = driver.find_element(By.XPATH, "(//a[@class='_8VNy32'])[1]")
url = urlElement.get_attribute('href')
print(url)
fileProducts.write(url)

# print ratings
ratings = driver.find_element(By.XPATH, "(//span[@class='_1lRcqv'])[1]")
print(ratings)
fileProducts = open('flipcartProducts', 'w')
fileProducts.write(ratings.text)
print(fileProducts)

# print price
price = driver.find_element(By.XPATH, "(//a[@class='_8VNy32'])[1]")
print(price.text)
fileProducts.write(price.text)
print('Price is:', price.text)

# print the name of product
# def productListWrite():
#     with open('flipcartProducts.csv', 'w', newline='') as fileProducts:                   # Open CSV file in write mode
#         csvwriter = csv.writer(fileProducts)                                              # Set the delimiter as space
#         for i in range(1,11):
#             productList = driver.find_element(By.XPATH, "(//a[@class='s1Q9rs'])["+str(i)+"]")     # xpath with changing index
#             print('Product Name for', i, 'th product is:', productList.text)
#             product_name = productList.text.strip()
#             csvwriter.writerow([product_name])   
#             print('Product Name for', i, 'th product is:', product_name)

# # find url of product
# def urlWrite():
#     urlElement = driver.find_element(By.XPATH, "(//a[@class='_8VNy32'])[1]")
#     url = urlElement.get_attribute('href')
#     fileProducts = open('flipcartProducts.csv', 'a')
#     fileProducts.write(url)

# # print ratings
# def RatingsWrite():
#     ratings = driver.find_element(By.XPATH, "(//span[@class='_1lRcqv'])[1]")
#     fileProducts = open('flipcartProducts.csv', 'a')
#     fileProducts.write(ratings.text)

# # print price
# def PriceWrite():
#     price = driver.find_element(By.XPATH, "(//a[@class='_8VNy32'])[1]")
#     fileProducts = open('flipcartProducts.csv', 'a')
#     fileProducts.write(price.text)


# # def WRitetoCsv():
# #     fileProducts = open('flipcartProducts.csv', 'w')
# #     fileProducts.write(productList.text, )

# productListWrite()
# urlWrite()
# RatingsWrite()
# PriceWrite()


# wait page
time.sleep(5)