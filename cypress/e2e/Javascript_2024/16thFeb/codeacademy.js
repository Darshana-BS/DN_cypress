//codecademy
//1
// const prompt = require('prompt_sync')();
const prompt = require("prompt-sync")(); //invoke a call to the function returned by the  prompt-sync module

//add 10 to current year
var current_year = prompt('enter year:')
if (!isNaN(current_year))
    {
        current_year = parseInt(current_year) // parse the inputs to the int
        console.log(current_year + 1998)
    }
    else
        {
            console.log('Invalid input')
        }

//strings
let stringOne = "      Hello"
console.log(stringOne.length)
console.log(stringOne.trim())
console.log(stringOne.toUpperCase())
console.log(stringOne.charAt(2))
console.log(stringOne.toLowerCase())
let stringTwo = "World"

//Built-in Objects
console.log(Math.random()*10) //flaoting number till 10
var b = (Math.random()*10)    //flaoting number till 10
var a = Math.floor(b)          //flaoting number till 10 and then round down to nearest integer
console.log(a)                //printing out the random number that was rounded down
