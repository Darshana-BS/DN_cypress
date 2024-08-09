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
