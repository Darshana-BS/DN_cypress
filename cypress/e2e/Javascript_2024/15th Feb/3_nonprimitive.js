//objects
var cities = {
    'city': 'India',
    'city2': 'UK'
}

console.log(cities['city'])
console.log(cities.city)

var animal={
    'st':'cat',
    'nd': 'Crow',
eat(){
    console.log(`${animal.st} drinks milk`)
}
}
animal.eat()
console.log (animal.nd)


var students={
    'name': 'Darsh',
    'rollno': 40,
passed()
    {
        console.log(`${students.name} with ${students.rollno} is Passed`)
    }
}
students.passed()
console.log([students.name], [students.rollno])
console.log('--------')
console.log(students["name"])


//object new keyword
var flowers = new Object()
    flowers.name = 'lily'
    flowers.colour = 'whilte'
    flowers.flowers_details = function()
    {
        console.log(`${flowers.name} is having ${flowers.colour} colour`)
    }
    flowers.flowers_details()


let purple = flowers
let blue = flowers
a = purple==blue
console.log(a)
// (purple == blue)?console.log("true"): console.log("false")

let yellow = new Object()

b = Object.is(purple, blue)
c = Object.is(purple, yellow)

console.log(b)
console.log(c)

d = JSON.stringify(purple)==JSON.stringify(yellow)
console.log(d)