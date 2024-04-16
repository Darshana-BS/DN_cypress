def longest_symmetric(S):
  left_count, right_count, max_length = 0, 0, 0
  for char in S:
    if char == '<':
      left_count += 1
      max_length = max(max_length, min(left_count, right_count))
    elif char == '>':
      right_count += 1
      max_length = max(max_length, min(left_count, right_count))
  return max_length * 2


# Example usage
#example 1st
S = "<><??>"
S = S.replace('?', '<')
print(S)
result = longest_symmetric(S)
print(result)  # Output: 4

#2nd
S = "??????"
S = S.replace('?', '<', 3)
S = S.replace('?', '>', 3)
print(S)
result = longest_symmetric(S)
print(result)

#3rd
S = "<<?"
result2 = longest_symmetric(S)
print(result2)