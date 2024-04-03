from selenium import webdriver
from selenium.webdriver.common.by import By

# headless
# chrome_options = webdriver.ChromeOptions()
# chrome_options.add_argument('headless')
# driver = webdriver.Chrome(options=chrome_options)
driver = webdriver.Chrome()
# visit url
driver.get('https://rahulshettyacademy.com/seleniumPractise/#/')

# click To deals
driver.find_element(By.LINK_TEXT, "Top Deals").click()

# handle windows
widnows = driver.window_handles

# switch to child window
child = driver.switch_to.window(widnows[1])
print(driver.current_url)

# find the column sorting
driver.find_element(By.XPATH, "(//th[@role='columnheader'])[1]").click()

# get the list of all rows items
Browserlist = []
item = driver.find_elements(By.XPATH, "//tr/td[1]")
print(len(item))

for i in range(len(item)):
    name = item[i].text
    Browserlist.append(name)
    print('Browserlist is:', Browserlist)

BrowserlistOrginal = Browserlist.copy()
# sort the list found out
print(Browserlist)
print('sorted list:', Browserlist.sort())

assert BrowserlistOrginal == Browserlist
