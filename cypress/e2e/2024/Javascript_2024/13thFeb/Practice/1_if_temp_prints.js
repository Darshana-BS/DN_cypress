//Temperature Converter:
// Write a JavaScript program that prompts the user to enter a temperature in Celsius.
//If the temperature is above 25 degrees Celsius, print "It's hot outside!" to the console. If it's below 10 degrees Celsius, print "It's cold outside!" Otherwise, print "The weather is pleasant."

let user = prompt('enter your name:')
console.log('user name: ', user)

let temp = prompt('enter the temperature in celcius:')
console.log('entered  temperature is :',temp);

if(temp>25)
{
    console.log("It's hot outside and it's", temp, "degree celcius")
}
else if (temp<25)
{
    console.log("It's cold outside!")
}
else
{console.log('The weather is pleasant')}