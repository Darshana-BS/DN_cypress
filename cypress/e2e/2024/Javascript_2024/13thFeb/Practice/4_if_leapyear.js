//Leap Year Checker:
//Write a JavaScript program that prompts the user to enter a year.
//Determine whether the entered year is a leap year or not. If it is a leap year, print "The entered year is a leap year." Otherwise, print "The entered year is not a leap year."

const prompt= require('prompt-sync')();
var  inputyear = prompt("Enter a year")

if (inputyear%4 ==0)
{
    console.log('Year is a leap year with 365 days')
}
else
{
    console.log('Year is not leap one')
}
