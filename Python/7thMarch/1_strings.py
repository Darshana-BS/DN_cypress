# strings
string1= ' Hi Darshana '

print(string1[0])     #first element
print(string1[-1])    #last element
print(string1[1:6])   #Srint - slicing
print(len(string1))   #find length
print(string1[-5:-2])  #Srint - slicing

# #string modify
print('Uppercase: ', string1.upper())
print('Loercase: ', string1.lower())
print('remove whietespace=', string1.strip())
print('remove left whietespace=', string1.lstrip())        #left remove
print('remove right whietespace=', string1.rstrip())        #right remove

string1 = string1.replace('i', 'I')  
print('Modified: ', string1)

# split and trim
print(string1)
dot = string1.split(" ")
print (dot)


# String Concatenation
string2 = 'you are Happy'
a = 10 
print(string1+ ' '+string2)    #concatinate
print("{}{}".format(string1, a))
print(string1+'Hi '+string2)
print(string1+'. '+string2)

# String Format
age = 11
print(string1, age)
string1 = string1 + format(age)
print('new string is:', string1)
                                                                          # using index
quantity = 3                                                              #index 0
itemno = 567                                                              #index 1
price = 49.95                                                             #index 2
myorder = "I want {0} of itemno {1} having the price {2}"         #using index for variables as 2, 0 and 1
print(myorder.format(quantity, itemno, price))

# check if word is present in string
if 'Hi' in string1:
    print('yes')
else:
    print('no')


# check if word is NOT present in string
if 'DN' not in string1:
    print('yes')
else:
    print('no')

# method 2
print('HI' in string1)
print('Hi' in string1)

