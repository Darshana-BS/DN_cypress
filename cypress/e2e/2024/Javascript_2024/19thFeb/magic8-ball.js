//magic  8ball 
var userName ='DN'

userName.null?console.log('EMpty'):console.log(`Hello ${userName}!`)

const prompt = require('prompt-sync')();

var userQuestion = prompt('Enter the magic eight ball?')
console.log(`${userQuestion}`)

random = Math.floor(Math.random()*8)
console.log(random)

var eightBall = ''
eightBall = random
switch(random)
{
    case 0:
        console.log('It is certain')
        break;
    case 1:
        console.log('It is decidedly so')
        break;
    case 2:
        console.log('Reply hazy try again')
        break;
    case 3:
        console.log('Cannot predict now')
        break;
    case 4:
        console.log('Do not count on it')
        break;
    case 5:
        console.log('My sources say no')
        break;
    case 6:
        console.log('It is certain')
        break;
    case 7:
        console.log('Outlook not so good')
        break;
    case 8:
        console.log('Signs point to yes')
        break;
    
}
console.log(`The value of eightBall is: ${eightBall}`)