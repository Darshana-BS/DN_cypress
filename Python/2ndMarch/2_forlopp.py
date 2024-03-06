# for loop to iterate over and print each element
fruits = ['Orange', 'Grapes', 'Banana', 'Apple']
for i in fruits:
    print('The elements of fruits list are:', i)

# multiples of numbers
nums = [1,2,3,4]
for i in nums:
    print('twice is:', i*2)

# sum of natural numbers 1+2+3+4+5 = 15
sum = 0
mul = 1
for i in range(1,6):
    print('Each element is:', i)
    sum = sum +i 
    mul = mul*i
print('SUm is:', sum)
print('Multiply is:', mul)

# increament by 2 = even numbers
print('------------even numbers------------')
for i in range(0,10,2):
    print('Print each even element:', i)

print('------------odd numbers-------------')
for i in range(1,10,2):
    print('Print each odd element:', i)


print('------------no first argument added-------------')
for a in range(5):
    print('Print each odd element:', a)


