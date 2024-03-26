import csv
import os
import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

#delete file
if os.path.exists('berry_name.csv'):
    os.remove('berry_name.csv')
else:
    print('no data')

driver = webdriver.Chrome()
driver.get('https://rahulshettyacademy.com/seleniumPractise/#/')
# search items
driver.find_element(By.CLASS_NAME, 'search-keyword').send_keys('be')
time.sleep(2)
# get list of all products shown after search
prod = driver.find_elements(By.XPATH, '//h4[@class="product-name"]')
print(len(prod))
class Product:
    def __init__(self):
        self.prname = None  # Initialize prname attribute

    def ProductsList(self):
        with open ('berry_name.csv', 'a', newline='') as fileProducts:
            for i in range(len(prod)):
                self.prname = driver.find_element(By.XPATH, "(//h4[@class='product-name'])[" + str(i+1) +"]")
                fileProducts.write(self.prname.text +'\n')


    # add to a cart all products searched 
    def addToCart(self):
        for i in range(1,len(prod)+1):
            addToCart = driver.find_element(By.XPATH, "(//button[@type='button'])[" + str(i+1) +"]")
            addToCart.click()

    # write the name of each element in the csv file
    # def write(self):
    #     self.ProductsList()
    #     # fileProducts = open('berry_name.csv', 'w', newline='')
    #     # fileProducts = open('berry_name.csv', 'a', newline='')
    #     with open ('berry_name.csv', 'a', newline='') as fileProducts:
    #         fileProducts.write(self.prname.text +'\n')

# find cart total
def cartTotal():
    total_cost = 0
    for i in range(len(prod)):
        pPrice = driver.find_element(By.XPATH, "(//p[@class='product-price'])[" + str(i+1) + "]")
        total_cost += int(pPrice.text)
        print(total_cost)
cartTotal()

Produc1 = Product()
Produc1.ProductsList()
Produc1.addToCart()



# def writetofile(productName):
#     #file add
#     with open ('berry_name.csv', 'a', newline='') as productName:
#         writer = csv.writer(productName)
#         writer.writerow([productName])

time.sleep(4)
