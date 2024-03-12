file = open('2_readwrite.txt')

#read
# print(file.read())    #read all content of file
# print(file.read(2))   #read first 2 characters of file
# print(file.read(4))   #read first 2 characters of file
# print(file.readline())    #read single line by line

# print(file.readlines())
for i in file.readlines():
    print (i)

# print line by line using readline method
line = file.readline()
while line!='':
    print(line)
    line = file.readline()

file.close()          #avoid memory leaks or file crashing due to multiple files open