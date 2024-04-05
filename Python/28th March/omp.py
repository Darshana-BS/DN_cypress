array = [1,2,3, 4, 5]

smallest = array[0]

for i in array:
    if i < smallest:
        smallest = i
print(smallest)