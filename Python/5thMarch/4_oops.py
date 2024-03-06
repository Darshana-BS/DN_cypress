# class - user defined blue print / prototype
# has the method. variables which are defined by user while creating the project
class Calculator:
    num_class = 100
    num2_class = 10
    def __init__(self,num,num2):
        self.num = num
        self.num2 = num2
        print('I am called')

    def getnum(self):
        print('Printng value of num and num2 indexed with 0 and 1: ', self.num, self.num2)

    def add(self):
        return self.num+self.num2+Calculator.num_class+Calculator.num2_class
    
    def subtrct(self):
        subtrct = self.num - self.num2
        print('Subtraction of num and num2 is:', subtrct)

    def mult(self):
        mult = self.num * self.num2
        print('Mult of num and num2 is:', mult)

action1 = Calculator(2,3)
action1.getnum()
print(action1.add())
# print(action1.num)
# print(action1.num2)

# action2 = Calculater(5,3)
# action2.add()
 