#If statements:
# Check if a number is positive, negative, or zero
num = 20
if num > 0:
    print(num, 'num is positive')
elif num < 0:
    print(num, 'num is negative')
else:
    print(num, 'num is 0')

# Nested If statements:
num2 = -22234567894
if num2>0:
    if(num2%2==0):
        print(num2, 'is +ve and','even')
    elif(num2 %2!= 0) & (num2 > 0):
            print(num2, 'is +ve and','odd')
elif num2<0:
    if  num2%2 !=0:
        print(num2, 'Number is less than 0 and odd -ve')
    elif num2%2 ==0:
        print(num2, 'Number is less than 0 and even -ve')
else:
    print(num2, 'is 0')