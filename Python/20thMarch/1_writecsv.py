# https://www.freecodecamp.org/news/how-to-create-a-csv-file-in-python/

import csv
import os

file_name = 'darshana.csv'
if os.path.exists(file_name):
    os.remove(file_name)
else:
    print ('no file exist for darshana.csv')
    
with open(file_name, 'w') as file:
    columns = ['Name', 'URL', 'Price', 'Ratings']
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerow(['Tata Team Premium', 'bcom', 'Rs. 302', 4.2])

# writerows
    writer= csv.writer(file)
    rows = [
        ['Name', 'URL', 'Price', 'Ratings'],
        ['Tata Team Premium', 'bcom', 'Rs. 302', 4.2]
    ]
    writer.writerows(rows)

# DictWriter
    