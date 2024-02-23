let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo'
console.log(condiments)

condiments = ['Mayo'];
console.log(condiments)

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[0] = 'D'
console.log(utensils)

// utensils = 'D' //TypeError: Assignment to constant variable.
console.log(utensils)

console.log(typeof condiments)
console.log(condiments instanceof Object)

let fruits = [2, 1, 'DM', 'DN']
fruits.slice(2,1)
console.log(fruits.slice(1,2))
console.log(fruits.splice(1,2, 10,  1100))
console.log(fruits.concat(condiments, utensils))


//type1
let square2 = function (num) 
{
    console.log(num*num)
}
// console.log()
square2(2)

//type2
let square = (num) =>
{
    console.log(num*num)
}
// console.log(num*num)
square(4)

//type3
square3(5)
function square3(num)
{
    return num*num
    // console.log(num*num)
}
console.log(square3(5))
square3(5)