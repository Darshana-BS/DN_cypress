//classes

//https://www.youtube.com/watch?v=D2OjHCUIHNc&list=PLhW3qG5bs-L9MspCEDoTa4TuGJ3K9k9F_&index=21

class Student{
    setDetails(name, id){
        this.name = name;
        this.id = id
    }
    

}
let st1 = new Student();
st1.setDetails('DN', 1);
console.log(st1.name)
console.log(st1.id)

//use of constructor mthoed
//it is present by defau;t with no params
//helps to defin / set the object values with using setDetails 
class Student2{
    constructor (name, id){
        this.name = name;
        this.id = id
    }
}

let st2 = new Student2('DN', 1)
let st3 = new Student2('DN2', 2)
let st4 = new Student2('DN3', 3)
let st5 = new Student2('DN4', 4)


console.log(st2.name, st3.name, st4.name, st5.name)
console.log(st2.id, st3.id, st4.id, st5.id)
