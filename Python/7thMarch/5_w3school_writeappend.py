# create file using mode x
file = open('Darsh.txt', 'x')

# write to file using w mode
file = open('Darsh.txt', 'w')
file.write('Firt line is a new line added done')
print(file)

# append a second lin to file using mode a
file = open('Darsh.txt', 'a')
file.write('\nsecond line is here now')
print(file)
file.close()

# delete file
import os
if os.path.exists('Darsh.txt'):
    os.remove('Darsh.txt')
else:
    print('Does not exists')
# Check if File exist

# delete folder
# os.rmdir('dummy')