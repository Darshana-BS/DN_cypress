# prime number

# algorithm
# num <=1, num%2 = 0
def primeNum(number):
    if number <=1:
        return False
    elif number <=3:
        return True
    elif number%2 ==0 or number%3 ==0:
        return False
    i = 5
    while   i*i<=number:
        if number%i ==0 or number %(i+2)==0:
            return False
        i+=6
    
    
print(primeNum(37))


# select p.name as patient_name d.name as doctor_name
# from patient p 
# inner join doctor d on p.doctor_id = d.id
# where d.name = 'XYZ'