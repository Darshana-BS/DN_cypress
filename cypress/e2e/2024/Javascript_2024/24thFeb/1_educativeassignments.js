const prompt = require('prompt-sync')();

//The problem is as follows:
//For 2 variables, x and y, find twice the value of the sum of the two variables.
var a = 2
var y = 4
sum = a + y
// console.log(sum)
// console.log('sum of a and y is: ', 2*sum )

//“For a certain value, find its remainder when divided by 10 and add it to its original value.”
/*const prompt = require('prompt-sync')();
var a = prompt('Enetr num1:')
var b = prompt('Enetr num2:')
remainder = a% b;
console.log('remainder is: ', remainder)
result = parseInt(remainder) + parseInt(a);
console.log(`final result: ${result}`)*/

//“For the values x and n, find the resulting value when x is multiplied to its original value n times.”
// var x = prompt('Enetr num1:')
// var y = prompt('Enetr num2:')

// class Actions 
function Actions(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
   
    let base = 10;
    let bonus = 10;
    let getFinalSum = function(){
        let finalsum = base+bonus;
        console.log(finalsum)
    }
    this.getAdd = function (){
        sum =  this.num1+this.num2
        getFinalSum()
        
    // this.setNums(num1, num2)
    }
}

//prototype
Actions.prototype.getMult = function (num1,num2){
    return this.num1*this.num2
}

let act1 = new Actions(2,20)
// act1.setNums(2,20)
console.log(act1.getAdd())
console.log(act1.getMult())
// console.log(act1.getFinalSum())