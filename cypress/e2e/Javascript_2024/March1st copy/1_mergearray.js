// Merge array elements like bow 
// array1 = ["a","b","c", "d", "e"] // array2 =["1","2"] 
// output = ["a","1","b","2","c","d", "e"] 
//or 
// array1 = ["a","b","c", "d", "e"] // array2 =["1","2","3","4","5", "6","7"] 
// output = ["a","1","b","2","c","3",d","4", "e","5","6","7"]

//method1
let array1 = ["a","b","c", "d", "e"] 
let array2 =["1","2"] 
array1.splice(1,0,array2[0])
array1.splice(3,0,array2[1])
console.log(array1)

//method2
var a = array1.length //5
var b = array2.length //2

len = a > b? array1.length: array2.length
var array_new = []
console.log(len)

for (let i=0; i<len; i++)
{
    if (i<array1.length)
    {
        array_new.push(array1[i])
    }else if(i<array2.length)
    {
        array_new.push(array2[i])
    }
}
console.log(array_new)