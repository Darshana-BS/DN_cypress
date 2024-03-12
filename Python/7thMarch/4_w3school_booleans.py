# When you compare two values, the expression is evaluated and Python returns the Boolean answer:
print(10>100)
print(0<100)
print(100==100)

# Print a message based on whether the condition is True or False:
a = 10
b = 20
if a > b :
    print (a, ' is > than', b)
elif a < b:
    print(a, 'is < than', b)
else:
    print(a, 'is equal', b)

# Evaluate Values and Variables
print(bool("Hello"))
print(bool(1))
print(bool(15))

# Evaluate two variables:
a = 0
b = 'Hello'
print(bool(a))
print(bool(b))
if bool(b):
    print ('its boolean')
else:
    print('not')

# false values
print('----\'false values\'----')
bool(False)
bool(None)
bool(0)
bool("")
bool(())
bool([])
bool({})