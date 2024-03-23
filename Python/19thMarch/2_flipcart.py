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
# productList = driver.find_element(By.XPATH, "(//a[@class='s1Q9rs'])[1]")  # index starts from 1
# print(productList.text)
# # write the name of product to the csv file
# fileProducts = open('flipcartProducts', 'w')
# fileProducts.write(productList.text)
# print(fileProducts)

# # find url of product
# urlElement = driver.find_element(By.XPATH, "(//a[@class='_8VNy32'])[1]")
# url = urlElement.get_attribute('href')
# print(url)
# fileProducts.write(url)

# # print ratings
# ratings = driver.find_element(By.XPATH, "(//span[@class='_1lRcqv'])[1]")
# print(ratings)
# fileProducts = open('flipcartProducts', 'w')
# fileProducts.write(ratings.text)
# print(fileProducts)

# # print price
# price = driver.find_element(By.XPATH, "(//a[@class='_8VNy32'])[1]")
# print(price.text)
# fileProducts.write(price.text)
# print('Price is:', price.text)


# print the name of product
class  Product():
     with open('flipcartProducts.csv', 'w', newline='') as fileProducts:                           # Open CSV file in write mode
        def productList(self):
            for i in range(1,11):
                self.productList = driver.find_element(By.XPATH, "(//a[@class='s1Q9rs'])["+str(i)+"]")     # xpath with changing index
                self.product_name = self.productList.text.strip()
                    
        # find url of product
        def urlWrite(self):
         for i in range(1,11):
            self.urlElement = driver.find_element(By.XPATH, "(//a[@class='_8VNy32'])[1]")
            self.url = self.urlElement.get_attribute('href')
            # fileProducts = open('flipcartProducts.csv', 'a')
            # fileProducts.write(self.url)

        # print ratings
        def RatingsWrite(self):
         for i in range(1,11):
            self.ratings = driver.find_element(By.XPATH, "(//span[@class='_1lRcqv'])[1]")
            # self.fileProducts = open('flipcartProducts.csv', 'a')
            # self.fileProducts.write(self.ratings.text)

        # print price
        def PriceWrite(self):
         for i in range(1,11):
            self.price = driver.find_element(By.XPATH, "(//a[@class='_8VNy32'])[1]")
            # fileProducts = open('flipcartProducts.csv', 'a')
            # fileProducts.write(self.price.text)
        
        # writetofile
        def writefile(self):
            with open('flipcartProducts.csv', 'w', newline='') as fileProducts:                   # Open CSV file in write mode
                for i in range(1,11):
                    csvwriter = csv.writer(fileProducts)                                              # Set the delimiter as space
                    csvwriter.writerow([self.product_name])
                    fileProducts = open('flipcartProducts.csv', 'a')
                    
                    # url
                    self.urlWrite()
                    fileProducts.write(self.url)

                    # ratings
                    self.RatingsWrite()
                    fileProducts.write(self.ratings.text)
                    
                    # price
                    self.PriceWrite()
                    fileProducts.write(self.price.text)

product1 = Product()
product1.productList()
# product1.writefile()
# product1.RatingsWrite()
# product1.PriceWrite()

         
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


# def WRitetoCsv():
#     fileProducts = open('flipcartProducts.csv', 'w')
#     fileProducts.write(productList.text, )


# urlWrite()
# RatingsWrite()
# PriceWrite()


# wait page
time.sleep(5)