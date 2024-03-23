# Twinkle, twinkle, little star, How I wonder what you are! Up above the world so high, Like a diamond in the sky. Twinkle, twinkle, little star, How I wonder what you are"

print ("Twinkle, twinkle, little star,\n\tHow I wonder what you are! \n\t\t\tUp above the world so high, \n\t\t\tLike a diamond in the sky.\n Twinkle, twinkle, little star,\n\t\tHow I wonder what you are")

print("------------#2------------")
# 2. Write a Python program to find out what version of Python you are using.
import sys
print('Pyhton version:', sys.version)
print("Version info.is: ", sys.version_info)

print("------------#3------------")
# 3. Write a Python program to display the current date and time.
import datetime
current_time = datetime.datetime.now()
print("Time now at greenwich meridian is:", current_time)
print("Year :", current_time.year)

print("------------#4------------")
# 4. Write a Python program that calculates the area of a circle based on the radius entered by the user.
from math import pi
radius = float(input('Enter radius'))
area = pi * radius**2
print(area)

print("------------#4------------")
#5. Write a Python program that accepts the user's first and last name and prints them in reverse order with a space between them.
firstname = str(input('Firstname:'))
lastname = str(input('Lastname:'))
firstname = firstname[::-1]
print (firstname)

