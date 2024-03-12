# file = open('2_readwrite.txt')
# file.close()

# rever list
with open('2_readwrite.txt', 'r') as reader:
    content = reader.readlines()
    reversed(content)

    print(reversed(content))

    # write file
    with open('2_readwrite.txt', 'w') as writer:
        for i in reversed(content):
            writer.write(i)