str = "test in # javascript"

len = len(str)
i = len-1
reversed = ""
# for i in range(len):
while i>=0:
    reversed += str[i]
    i-=1
print(reversed)

print(reversed.split('#'))
array = reversed.split('#')
string = "".join(array)
print (string)
