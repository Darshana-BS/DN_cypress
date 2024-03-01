print("Hello")

# variable declaration
a = 3
print(a)
print(type(a))

#variables creation and code indentation
a,b,c = 2, 'three', 4.3
print(a,b,c)

# print strings and ints together
print('without {} string is', a)

d = 1
print("{} {} {}".format("value is", b, d))
print('print  value of (b, d) is:', b, d)

print("{}{}".format('b', ' d'))


# Numeric = interger, long, complex, floats
print('------------Numeric-------------')
a = 1; b = 1.1; c = 1+1j
print(a,'is value and type is:', type(a), b, 
      'is value and type is:', type(b), c,'is value and type is:'), type(c)

# strings
print('------------Strings-------------')
string1 = 'I am string'
print(a,'is value and type is:', type(a), b, 
      'is value and type is:', type(b), c,'is value and type is:', type(c),
      'and strings is:', string1)

# List = datatype that holds multiple values and can have different datatypes
print('------------Lists-------------')
array = [1, 2, 'three', 'four']
print(array[0])
print(array[-1])
print(array[0:3])
print(len(array))
# print(array.length)
# insert new string
array.insert(1, 'one')
print(array)

# remove element
del array[1] # delete by index
print(array)

# append at end
array.append(5)
print(array)

# update the value at position / index with new value
array[4] = 'FIVE'
print(array)


# tuples
print('------------tuples-------------')
tuple = (20, 2000, 'tuple1', 'tuple34')
print(tuple)
print(tuple[1]) #print value of specific tuple index
print(tuple[1:3]) #print tuple values from 1 to 2

print('------------dictionary-------------')
dict = {
    1: 'HI',
    2: 'Happy',
    'name': 'Darshana',
    'familyname': 'Nehulkar'
}
print(dict[1])
print(dict[2])
print(dict['name'])
print(dict['familyname'])
print(dict)

# create dictionary at run time
print('------------declare dictionary-------------')
dict2 = {}
dict2[0]= 'zero'
dict2['lily']= 'white'
dict2['roses']= 'red'
dict2['mogra']= 'white'
dict2['Aster']= 'pink'
print(dict2)
print(dict2['lily'])




print(dict2)

