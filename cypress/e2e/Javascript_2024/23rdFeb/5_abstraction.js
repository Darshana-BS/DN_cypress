// const { add } = require("cypress/types/lodash");

function Employee(name, age, basesalry, address){
    this.name = name;
    this.age = age;
    this.basesalry = basesalry;
    this.address = address;
    // this.bonus = bonus;
    
    let bonus = 10000;

    // this.calculatesalary = function(){
    //     let finalsalary = this.basesalry+this.bonus;
    //     console.log ('Final salary:', finalsalary)
    // }  
    let calculatesalary = function(){
        let finalsalary = basesalry+bonus;
        console.log ('Final salary:', finalsalary)
    }      
    this.getDetails = function (){
        console.log ('Name is:', this.name, 'and theage is:', age)
        calculatesalary()
    }
}
let emp1 = new Employee('DN', 12, 20000000, 'Nsk', 20)
emp1.getDetails()
// emp1.calculatesalary()