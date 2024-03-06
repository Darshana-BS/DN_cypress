# https://www.w3schools.com/python/python_strings.asp
string_hi = 'Hello DN'
print('-------------general commands for string-----------------')
# are arrays
print(string_hi [0])

# looping through strings
for i in string_hi:
    print(i)

# string length
print(len(string_hi))

# check if word is present in string
string_world = 'World is worst and small'
print('world' in string_world)
print('World' in string_world)

# if statement, present
if 'world' in string_world:
    print('Yes found')
else:
    print('Not found')

# if not present
if 'World' not in string_world:
    print('Not found')
else:
    print('found')

print('-----------------------Srint - slicing---------------------------')# https://www.w3schools.com/python/python_strings_slicing.asp
# slicing = return a range of characters
b = "Hello, World!"
print('Charatcers from 2nd index to 5th index are: ', b[2:5])

# slice from start
print('Charatcers from 0th index to 5th index are: ', b[0:5])
print('Charatcers from 0th index to 5th index are: ',b[:5])

# slice to / till end
print('Charatcers from 2nd index to -1th index are: ', b[2:])

# Negative Indexing
print('Length of b string is:', len(b))
print('Charatcers from 10th index to -2th excluding -1 index are: ', b[10:-1])           #does not include the last character
print('Charatcers from -5th index to -2th excluding -2 index are: ', b[-5:-2])

print('-----------------------Modify Strings---------------------------')
a = " Hello, World! "
print(a.upper())               #upper case
print(a.lower())               #lower case
print(a.strip())               #Remove Whitespace from start and trailing
print(a.replace('H', 'D'))     #Replace String from start and trailing
print('split string:',a.split(','))            #Split String with commas ,
# print(a.split('.'))
# print(a.split('[]'))
# print(a.split('()'))

print('-----------------------String Concatenation---------------------------')
aa22 = " Hello, World! "
bb44 = "DN"
print('concated is:' , aa22, bb44)
print('concated is: 2', aa22+bb44)
print('concated is: 2', aa22+" "+bb44)
print('concated is: 2', aa22+"."+bb44)


print('-----------------------String Format---------------------------')
age = 36
# txt = "My name is John, I am ", + age  shows error
txt = "My name is John, I am "
txt = txt + format(age)
# "{}{}".format()
print(txt)

quantity = 3                                                              #index 0
itemno = 567                                                              #index 1
price = 49.95                                                             #index 2
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."         #using index for variables as 2, 0 and 1
print(myorder.format(quantity, itemno, price))

print('-----------------------Escape Characters---------------------------')
print('We are from the \'Bangar India\' country')
print('We are from the \'Bangar India\' country')         # \' Single Quote	
print('We are from the \\Bangar India country')           # \\	Backslash	
print('We are from the \nBangar India country')           # \n	New Line	
print('We are from the \rBangar India country')           # \r	Carriage Return	
print('We are from the \tBangar India country')           # \t	Tab	
print('We are from the \bBangar India country')           # \b	Backspace	
print('We are from the \fBangar India country')           # \f	Form Feed	
txt2 = "\110\145\154\154\157"
print(txt2)                                         # \ooo	Octal value	
txt1 = "\x48\x65\x6c\x6c\x6f"                              
print(txt1)                                               # \xhh	Hex value




    
 