class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(this.name, 'eats food')
    }
}
let dog = new Animal('Dog')
dog.eat()

class Alligator extends Animal{
    eat(){
        super.eat()
        console.log(this.name, 'eats fish')
    }
}
let marphy = new Alligator('Marphy')
marphy.eat()