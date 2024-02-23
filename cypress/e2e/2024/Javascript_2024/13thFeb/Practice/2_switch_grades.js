//Grade Calculator:
//Write a JavaScript program that prompts the user to enter their grade (a number between 0 and 100).
//Based on the grade entered, print the corresponding letter grade according to the following criteria:
/*
A: 90 - 100
B: 80 - 89
C: 70 - 79
D: 60 - 69
F: Below 60
*/

const prompt = require("prompt-sync")(); //invoke a call to the function returned by the  prompt-sync module

let name = prompt('enter your name:')
let grade = prompt('enter your grade:')

switch(true)
    {
        case(grade>=90 && grade<=100): console.log('grade is A');
        break;

        case(grade<=89 && grade>=80): console.log('grade is B');
        break;

        case(grade<=79 && grade>=70): console.log('grade is C');
        break;

        case(grade<=69 && grade>=60): console.log('grade is D');
        break;

        case(grade<50): console.log('grade is F');
        break;

        default:  console.log('grade is E');
    }
    
    // {

    // }