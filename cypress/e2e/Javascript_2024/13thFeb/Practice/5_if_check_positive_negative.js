//Positive/Negative Number Checker:
//Write a JavaScript program that prompts the user to enter a number. Check if the entered number is positive, negative, or zero. Print the result accordingly.

const  prompt = require('prompt-sync')();
var inputnum = prompt('Enter number')

if(inputnum < 0)
{
    console.log('The number is -ve')
}
else if(inputnum>0)
{
    console.log('Number is positive')
}
else if (inputnum==0)
{
    console.log('the number is 0')
}
else
{
    console.log('is not a number')
}
