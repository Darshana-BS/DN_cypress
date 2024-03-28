DOB = input('enter the DOB')

date_array = []
for i in DOB:
    date_array.append(int(i))
print (date_array)

date_sum_total = 0
date_sum_total_array = []
for j in date_array:
    date_sum_total += j
    date_sum_total_array.append(int(j))
    print (date_sum_total)
    print (date_sum_total_array)

#     if date_sum_total > 9:
#         new_date_sum_total = 0
#         for digit in date:
#             new_date_sum_total =

# sum_start_date = int(date_array[0]) + int(date_array[-1])
# print(sum_start_date)

# new_date = str(date_array)
# print(new_date)