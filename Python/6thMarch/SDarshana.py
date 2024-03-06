from Sunita import Sunita

class Darshana(Sunita):
    childvalue = 8

    def __init__(self):
        Sunita.__init__(self, 1, 2)
    
    def sum_child(self):
        return self.childvalue + self.b + self.a + self.sum()
    
darsh1 = Darshana()
print('get All:', darsh1.sum_child())
print('childvalue :', darsh1.childvalue)