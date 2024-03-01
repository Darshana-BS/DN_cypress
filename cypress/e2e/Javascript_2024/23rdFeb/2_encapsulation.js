class Employee {
    setEmpDetails (name, id, phoneno)
    {
        this.name = name;
        this.id = id;
        this.phoneno= phoneno;
    }
    getEmpName(){
        return this.name;
    }
    getEmpid(){
        return this.id;
    }
    getEmpphoneno(){
        return this.phoneno;
    }
}

let emp1 = new Employee()
emp1.setEmpDetails('DN', 1, '0123456789')
console.log(emp1.getEmpName())
console.log(emp1.getEmpid())
console.log(emp1.getEmpphoneno())