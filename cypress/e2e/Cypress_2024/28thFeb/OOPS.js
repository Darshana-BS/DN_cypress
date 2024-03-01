// //objects - has different proprties

// import { extend } from "cypress/types/lodash"

let car = {
    "name": 'Hundai',
    'modelNo': 20
}
console.log(car.name)

//Class - collection of many objects and methods
class Car{
    CarDetails(){
    this.name = 'name'
    this.modelNo = 'modelNo'
}
}
let mycar1 = new Car()
mycar1.name = 'Toyota'
console.log(mycar1.name)


//Constructor - function used to initialise the object
class Car_Constructor{
    constructor(name,modelNo){
        this.name = name;
        this.modelNo = modelNo;
    }

    getDetailsofcar(){
        console.log(`Constructor the car name is ${this.name} with model number ${this.modelNo}`)
    }
}
let maycar2 = new Car_Constructor('Audi', 456789);
maycar2.getDetailsofcar()

//Encapsulation - adding properties and functions in one unit
class Mycar_encap{
    constructor(name, modelno){
        this.name = name;
        this.modelno = modelno;
    }

    addfuel(fuelcapacity)
    {
        this.fuelcapacity = fuelcapacity
    }

    getCardetails(){
        console.log(`Encap car ${this.name}, ${this.modelno}, ${this.fuelcapacity}`);
    }
}
let mycar3 = new Mycar_encap('Bentley', 123456);
mycar3.addfuel(20)
mycar3.getCardetails()

//Inheritance - properties of one object are being used by another objec tw
class MyCar_inher{
    constructor(name){
        this.name = name;
    }
}
class MyCar_child extends MyCar_inher{
    constructor(name,modelNo)
    {
        super(name)
        this.modelNo = modelNo;
    }
    showDetails(){
     console.log(`${this.name} and ${this.modelNo}`)   
    }
}

let mycar4 = new MyCar_child('Darsh', 10)
mycar4.showDetails()

//Polymorphism - calling same function with different signatures many times
//Method Overriding = 
//Method Overloading = 


//Abstraction - Showing required hiding others
class Salary{
    constructor(name, id, basesalary)
    {
        this.name = name;
        this.id = id;
        this.basesalary = basesalary;
        var bonus = 10;

    let calculatesalary = function(){
        let variable = 20
        calculatesalary = bonus + basesalary
        console.log(`Final salary: ${calculatesalary}` )
    }
    this.getDetails  = function(){
        console.log ('Name is:', this.name, 'and id is:', this.id) //
        calculatesalary()
    }
        //()
}
}
let Salary1 = new Salary('DN', 1, 200)
Salary1.getDetails()