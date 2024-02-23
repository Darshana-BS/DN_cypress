# data types

# 1 numeric
a = 1
b = 1.2
c = 100+3j
print("Value and type of:", a, type(a))
print("Value and type of:", b, type(b))
print("Value and type of:", c, type(c))
print("\n----------------------------------------------------")

# 2 String
print("\nDatatype string")
string = 'dN'
print("my name is: ", string)
print("\n----------------------------------------------------")

# 3_1 sequence type = list
print("\nDatatype sequence type = List")
int_list = [1,2,3,4]
print("The int list  is:", int_list)

string_list = ["Hi", "DN"]
print("The string list  is:", string_list)

both_list = ["Hi", 1, 2, 3, 4, "DN"]
print("both_list is: ", both_list)

print("\n-------------some assignments on list-------------")
print(both_list[3])             #3
print(both_list[-1])
print("items from 1 to -1 are: ", (both_list[1:-1]))          # print the values less than the second value ex. 3-1 = so from 1 to 2

#insert value after 2
both_list.insert(3, 'DN2')
print(both_list)
print("\n----------------------------------------------------")

#  3_2 sequence type = Tuple
print("\nDatatype sequence type = Tuple")
int_tuple = (1, 2,3,4)
print("int_tuple is: ", int_tuple)

string_tuple = ('Hi', 'DN')
print("string_tuple is: ", string_tuple)

both_tuple = ('Hi',1, 2,3,4, 'DN')
print("both_tuple is: ", both_tuple)
print("\n----------------------------------------------------")

#  3_3 sequence type = Dictionary
print("\nDatatype sequence type = Dictionary")
dictionary = {1: "first name", 2: "last name", "age": 33}
print(dictionary[1])
print("\n----------------------------------------------------")







