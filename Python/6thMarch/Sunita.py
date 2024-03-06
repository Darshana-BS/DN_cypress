class Sunita:
    classvar = 2
    def __init__(self,a,b):
        self.a = a
        self.b = b

    def sum(self):
        sum = self.a+self.b+ Sunita.classvar
        return sum


sum1 = Sunita(2,4)
print(sum1.sum())

