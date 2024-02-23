class Car{
    setName(name)
    {
        this.name = name;
    }
    setFuelCapacity(capacity)
    {
        this.capacity = capacity;
    }
    startEngine()
    {
        console.log('The engine starts for', this.name);
    }
    stopEngine()
    {
        console.log('The engine stops for', this.name, 'and has capacity as:', this.capacity)
    }
}

class Toyota extends Car
{
    topSpeed(speed){
    // console.log(startEngine());
    console.log('Top speed for', this.name, 'is', speed , 'with capacity', 
    this.capacity)
}
}
let car1 = new Toyota();
car1.setName('henry');
car1.setFuelCapacity(80);
console.log(car1.startEngine());
console.log(car1.stopEngine());
car1.topSpeed(100);