# def solution(S):
#     # Iterate through each pair of strings in S
#     for i in range(len(S)):
#         for j in range(i+1, len(S)):
#             # Iterate through each position in the strings
#             for pos in range(len(S[i])):
#                 # If the characters at the same position in both strings are equal
#                 if S[i][pos] == S[j][pos]:
#                     # Return the pair of strings and the common position
#                     return [i, j, pos]
#     # If no such pair is found, return an empty array
#     return []

# # Example usage
# # S = ["abc", "bca", "dbe"]
# # S = ["zzzz", "ferz", "zdsr", "fgtd"]
# # S = ["zzzz", "ferz", "zdsr", "fgtd"]
# # S = ["gr", "sd", "rg"]
# S = ["bdafg", "ceagi"]
# print(solution(S))
# # 1. Given: S = ["abc", "bca", "dbe"], your function may return [0, 2, 1] as described above.
# # 2. Given: S = ['zzzz", "ferz", "zdsr", "fgtd"], your function may return [0, 1,3]. Both "zzzz" and "ferz" have 'z' in position 3. The function may also return [1, 3, O], which would reflect strings "ferz", "fgtd" and letter 'f'.
# # 3. Given A = ['gr", "sd", "rg"], your function should return []. There is no pair of strings that fulfils the criteria.
# # 4. Given A = ["bdafg", "ceagi"], your function may return [0, 1, 2].



def solutions(S):
    #iterate over every pair of the string in the array S
    for i in range(len(S)):
        for j in range(i+1, len(S)):
            #iterate thorigh each idex / position
            for index in range(len(S[i])):
                # compare the indexes
                if S[i][index] == S[j][index]:
                    #return pair of strings and index
                    return [i, j, index]
    #if no matchings pairs return empty list
    return []
S = ["bdafg", "ceagi"]
print(solutions(S))

# /*begin
# algorithm
# 1. initialize empty directory for storing the charatcer position for very string element
# 2. iterate over the string in the array S
# 3. for each and every string, iterate though each charatcer and stroe its index / position in the dictionary
# 4.  during iterating through each index / position in the string, check if the characters / element is present / seen / captured piror in some other string at the same position
# 5. if it is, then return the pair of the strings and common position
# 6. if not, return not found, empty array as []

# end*/


# __define-ocg__
def ArrayChallenge(arr):
    stack = []
    max_area = 0
    i = 0
    while i < len(arr):
        if not stack or arr[i] >= arr[stack[-1]]:
            stack.append(i)
            i += 1
        else:
            top_index = stack.pop()
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, arr[top_index] * width)
    while stack:
        top_index = stack.pop()
        width = i if not stack else len(arr) - stack[-1] - 1
        max_area = max(max_area, arr[top_index] * width)
    return max_area

# Test cases
print(ArrayChallenge([6, 3, 1, 4, 12,4]))  # Output: 16
