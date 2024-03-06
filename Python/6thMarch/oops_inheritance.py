# child class which has access to the parent class

# # inherited class
# import Calculator
# from ..5thMarch/4_oops import Calculator
from oops import Calculator

class Darshana(Calculator):
    value = 200

    def __init__(self):
        Calculator.__init__(self, 1, 2)
        
    def getall(self):
        return self.value + self.num_class + self.add()
    
child1 = Darshana()
print('get All:', child1.getall())
print('Child Value: ', child1.value)