//Find the Largest Element in an Array
array = [1001, 1, 33, 7, 44, 553, 77];
var len = array.length;

for (i = 0; i < len - 1; i++) {
  if (array[i] < array[i + 1])
  {
    var max = array[i + 1];
    // console.log("Max is:", `${array[i]}`);
  }
  else if (array[i] > array[i + 1]) 
  {
    console.log("Max is:", `${array[i]}`);
  }
}
// console.log("Max is:", `${max}`);

//method 2
// largest = 0;
// for (num of array) {
//   if (num > largest) {
//     largest = num;
//   }
// }
// console.log(largest);

// array = [100, 1, 33, 1000, 44, 55, 77];
// var len = array.length;

// array2 = [1, 2, 3, 7, 10];
// var len2 = array2.length;

// for (let i = 0; i < len2; i++) {
//   if (array2[i] < array2[i + 1]) {
//     temp = array2[i];
//     console.log(`The next largest number is: ${array2[i]}`);
//   } else if (array2[i] > array2[i + 1]) {
//     console.log(`The next largest number is: ${array2[i]}`);
//   }
// }
