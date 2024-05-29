# find the charatcers count appearance in string

str = "Darshana"
len = len(str)
char_count = {}

for char in str:
    if char in char_count:
        char_count[char] +=1
    else:
        char_count[char] = 1
print(char_count)



# remove special chara from string
string = "D@rSh@n@"

special_chars ="!@#$%^&*()"
print(string.split('@'))
string_new = ''.join(char for char in string if char not in special_chars:)
print(string_new)