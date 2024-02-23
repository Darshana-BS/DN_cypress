// function EmpDetails()
// {

// }
// myFunction.prototype
let EmpDetails = function(name, age){
    this.name = name;
    this.age = age;

    // this.getName = function(){
    //     return this.name;
    // }

    this.getAge = function(){
        return this.age;
    }
}
EmpDetails.prototype.getName = function(){
    return this.name;
}

let emp1 = new EmpDetails('DN', 22)
let emp2 = new EmpDetails('DN2', 22)

console.log(emp2.getName());
console.log(emp1.getAge());