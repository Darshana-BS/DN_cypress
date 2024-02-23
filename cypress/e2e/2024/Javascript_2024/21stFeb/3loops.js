for (let i=0; i<3 ; i++)
{
  console.log(i)
}


//reverse
for (let a=3; a>=0 ; a--)
{
  console.log(a)
}


//write the code to iterate over array
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
//method 1
for (i in vacationSpots)
{
  console.log('I would love to visit', vacationSpots [i])
}

//method 2
var a = vacationSpots.length
for (i = 0 ; i<= a-1; i++)
{
  console.log('I would love to visit', vacationSpots[i])
}


//find the mutual followers in two users accounts
let darsh_1 = ['D', 'N', 'P', 'Q', 'R', 'e', 'f', 'l']
let darsh_2 = ['D', 'N', 'H', 'I', 'J', 'K', 'f', 'e']

for (let i = 0; i< darsh_1.length; i++)
{
    for (let j = 0; j< darsh_2.length;j++)
    {
        if (darsh_1[i]==darsh_2[j])
        {
            console.log('Both have same elements:', darsh_1[i])
        }
    }
}


// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both arrays have the number: ' + yourArray[j]);
//     }
//   }
// }

//while
a = 0
while (a<3)
{
    console.log(a)
    a++
}


const cards = ['diamond', 'spade', 'heart', 'club'];
const currentCard = []
function createCard() {
    while(cards.length)
    {
        console.log('true')
    }
}
