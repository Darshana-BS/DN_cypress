# Loop to print numbers from 1 to 5

for i in range(10):          #print the numbers from 0 to 9, using single value in range without adding increament
    print(i)

for i in range(1, 10):       #print using range with start value and end values without adding increament
    print(i)

print('------------way three----------')
for i in range(1, 10, 2):     #increment the index by 4
    print(i)

print('---------Print odd numbers---------')
for i in range(1, 10, 2):     #increment the index by 4
    print(i)

print('---------------Print even numbers-------------')
for i in range(0, 10, 2):     #increment the index by 4
    print(i)


# print the details of list
fruits = ['Orange', 'Chicoo','Apple', 'Santri']
for i in fruits:
        print (i)