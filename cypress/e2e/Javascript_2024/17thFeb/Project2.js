//print dog's age from human's age

var humanage = 70

if (humanage<=20 && humanage>0)
{
  dogs_age = humanage/10
  console.log(`Dog's age is: ${dogs_age}`)
}
else if(humanage>=21)
{
    dogs_age = humanage/4
  console.log(`Dog's age is: ${dogs_age} `)
}


//print your age in dogs years
const prompt = require("prompt-sync")(); // require prompt to accept input

// var firsttwoyearshuman_age = 2
var human_age = prompt('Enter your age human:')
if (human_age>0 && human_age<=2)
{
    myageinDogsage1 = human_age*10.5
    console.log('Human age in dogs age is: '+ myageinDogsage1)
}
else
{   
    myageinDogsage = 21 + (human_age - 2)*4
    console.log(`Human age in dogs age is: ${myageinDogsage}`)
}