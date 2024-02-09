from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))

# visit website
driver.get("https://www.flipkart.com/")

# search product
searchbox = driver.find_element("xpath","//input[@class = 'Pke_EE']")
driver.save_screenshot("screenshot-1.png")

#  enter search keyword
searchbox.send_keys("Tata teat premium")
driver.save_screenshot("screenshot-2.png")

#  click on search button
driver.find_element("xpath", "//button[@class = '_2iLD__']" ).click()

# choose product
# css selctor
driver.find_element("cssSelector", 'href^=<a class="s1Q9rs" title="Tata Tea Premium Teaveda Tulsi, Cardamom, Ginger Black Tea Box" target="_blank" rel="noopener noreferrer" href="/tata-tea-premium-teaveda-tulsi-cardamom-ginger-black-box/p/itmf89b8d7277d92?pid=TEAGDTKAZAKHJYRE&amp;lid=LSTTEAGDTKAZAKHJYRELMU9SE&amp;marketplace=FLIPKART&amp;q=tata+tea+premium&amp;store=eat%2Ffpm&amp;srno=s_1_3&amp;otracker=search&amp;otracker1=search&amp;fm=Search&amp;iid=b88c4372-6748-435f-abf3-fc6b9be2384e.TEAGDTKAZAKHJYRE.SEARCH&amp;ppt=sp&amp;ppn=sp&amp;ssid=3pz0azqibk0000001707482986858&amp;qH=2c987739ff80091f">Tata Tea Premium Teaveda Tulsi, Cardamom, Ginger Black ...</a>')
# xpath
# class


# apply price filter from drop-down
driver.find_element()
driver.close() 