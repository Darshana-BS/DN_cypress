//hoisting
console.log(x)
var x = 10;
console.log(x)

//block level scope
let outside = 'DN'
function name()
    { 
        let inside = 'Darsh'
        console.log('Var 1:', inside);
        let outside = 'Dash'
        console.log('var 2 is:', outside);            
    }
    name()
    console.log('var 3 is : ', outside)
    // console.log('var 4 is : ', inside)

//const with let
const _name= 'Sunny'
function names_new()
    {
        name = 'rainy'
        console.log('name 2/new is here:', name)
    }
    names_new()
    console.log('name 1/old is here:', _name)

//global_scope with var and let keybbword
console.log('Global scope')
for (var g=0;g<5;g++)
{
    console.log(g)
}
console.log(g)

console.log('----------------------')
for (var vardeclaration=0 ; vardeclaration < 5 ; vardeclaration ++ )
{
    console.log(vardeclaration)
}
console.log(vardeclaration)


//block_scope
// console.log('Block scope')
// for (let b=0;b<5;b++)
// {
//     console.log(b)
// }
// console.log(b)


//let declaration1
console.log('-----------let declaration1-------------')
for (letdeclaration = 0; letdeclaration<5; letdeclaration++)
{
    console.log(letdeclaration)
}
console.log('-----------let declaration a-------------')
console.log(letdeclaration)

//let declaration2
console.log('-----------let declaration2-------------')
var letdeclaration = 2
console.log(letdeclaration)

// let letdeclaration = 2
// console.log(letdeclaration)

//cost declarations1
console.log('-----------const declaration1-------------')
const object ={'name': 'DN'}

object.name = 'DN2'
object.age = 22
console.log(object)

// object = 'DN'

const dnn_not = 10
// dnn_not = 100

var ddn_nt = 10
dnn_nt = 100
console.log(dnn_nt)


