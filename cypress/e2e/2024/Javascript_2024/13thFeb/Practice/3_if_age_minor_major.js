//Age Classifier:
//Write a JavaScript program that prompts the user to enter their age.
//If the age is less than 18, print "You are a minor." If the age is between 18 and 65 (inclusive), print "You are an adult." If the age is greater than 65, print "You are a senior citizen."

// const prompt = require('prompt-sync')();
let name = prompt('Enter the name of person whose age needs to validated:')
var age = prompt('Enter age:')

if (age<18 && age > 15)
    {
        console.log("You are a minor.")
    }
    else if(age>18)
        {
            console.log('You are a major/adult')
        }
        else if(age<15 && age>13)
            {
                console.log('You are a teen')
            }
    else
    {
        console.log('You are child')
    }