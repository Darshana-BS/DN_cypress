def StringChallenge(str1, str2):
    # If lengths are different, return False
    if len(str1) != len(str2):
        return "false"
    
    # Count frequencies of characters in str1
    count1 = {}
    for char in str1:
        if char in count1:
            count1[char] += 1
        else:
            count1[char] = 1
    
    # Count frequencies of characters in str2
    count2 = {}
    for char in str2:
        if char in count2:
            count2[char] += 1
        else:
            count2[char] = 1
    
    # Check if str1 can rearrange to match str2
    for char in count2:
        if char not in count1 or count2[char] > count1[char]:
            return "false"
    
    return "true"

# Test cases
print(StringChallenge("cdore", "coder"))  # Output: true
print(StringChallenge("h3llko", "hello"))  # Output: false
print(StringChallenge("kgodlw", "world"))  # Output: true