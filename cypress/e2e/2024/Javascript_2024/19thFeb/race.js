//race
let raceNumber = Math.floor(Math.random() * 1000);

const prompt = require('prompt-sync')();
var age = prompt('Enter your age:')
// var registeredEarly = true
var registeredEarly = prompt('Did you register early? (yes/no):').toLowerCase() ==='yes'

// if (age >=18 && raceNumber==true)
// {
//  raceNumber +=  1000
// }

var racetime;
if (age >= 18)
{
  if (registeredEarly) 
  {
    racetime ='8:30 AM'
  }
  else if (!registeredEarly)
  {
    racetime = '11:00 AM'
  }
}
  else 
  {
    racetime = '12:00 PM'
  }
console.log(`Runners with raceNumber ${raceNumber} , age ${age} will race at ${racetime}`);



// var registrationtime= '8:30'
// if ( age>=18 && registeredEarly)
// {
//    console.log(`Runners with raceNumber ${raceNumber} , age ${age} will race at 8:30 AM`);
// }
// else if (!registeredEarly && age>=18)
// {
//   console.log(`Runners with raceNumber ${raceNumber}, age ${age} will run at 11:00 AM`)
// }else if (age<18 && registeredEarly)
// {
//   console.log(`Runners with raceNumber ${raceNumber} age ${age} will run at 12:00 PM`)
// }else
// {
//   console.log(`Runners with raceNumber ${raceNumber} age ${age} will run at 12:30 PM`)
// }



// age>18, registeredEarly = true -> 8:30
// age>18, registeredEarly = false -> 11:00
// age<18, registeredEarly = true -> 12:30
// age<18, registeredEarly = false -> 12:30




// switch(age)
// {
//   case  "18":
//     console.log('a')
//     console.log(`Runners with ${raceNumber} , and ${age} will race at  ${registrationtime} `);
//     break;
  
//   case "<18":
//     console.log(`Runners with ${raceNumber} age ${age} will run at ${registrationtime}`)

// }