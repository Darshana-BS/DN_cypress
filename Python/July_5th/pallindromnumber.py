def countPalindromes(X, Y):
    # Initialize the result count
    result = 0
    
    # Helper function to check if a number is a palindrome
    def is_palindrome(n):
        s = str(n)
        return s == s[::-1]

    # Iterate through each number in the range [X, Y] inclusive
    for num in range(X, Y + 1):
        if is_palindrome(num):
            result += 1
    
    # Print the result
    print(result)

# Sample Input
X = 10
Y = 13

# Calling the function with sample input
countPalindromes(X, Y)
