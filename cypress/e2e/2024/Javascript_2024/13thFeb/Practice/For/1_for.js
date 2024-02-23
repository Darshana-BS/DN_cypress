//Write a JavaScript program that prints the numbers from 1 to 10 using a for loop.

console.log('First')
for (i=0;i<11;i++)
    console.log('numbers are:', i)


//print the numbers in form of array [0, 1, ....]
console.log('Second')
let numbers = []
for (i=0; i<1; i++)
    {
        numbers[i] = i;
        // console.log(numbers[i])
    }
console.log(numbers)


//print the numbers in form of array in order [0], [0,1]....  
console.log('Third')
var num = [];
for (i=0;i<11;i++)
    // console.log('numbers are:', i)
        {
            num[i] = i;
            console.log(num);
        }
    //response
        /*
        [ 0 ]
        [ 0, 1 ]
        [ 0, 1, 2 ]
        [ 0, 1, 2, 3 ]
        [ 0, 1, 2, 3, 4 ]
        [ 0, 1, 2, 3, 4, 5 ]
        [ 0, 1, 2, 3, 4, 5, 6]
        [ 0, 1, 2, 3, 4, 5, 6, 7]
        [ 0, 1, 2, 3, 4, 5, 6, 7, 8]
        [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        */