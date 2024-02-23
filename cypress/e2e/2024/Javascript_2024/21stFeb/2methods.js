//array methods
//join with any  separator
var array = [1,2,3,4]
console.log('join method:', array.join('-'))

//at = find element at position in an array
console.log('at method:', array.at(1))

//.concat() = does not change the existing arrays, but instead returns a new array
var array2 = ['DN']
console.log('concat method:', array.concat(array2))

//splice  = changes the original array and can add or delete elements
//parameters : start point , how many items to remove (if negative it will add) , item
 //
console.log('splice1 method:', array.splice(2,1,'Hi'))
console.log('updated array:', array)

days = ['Monday', 'Test', 2, 'Tuesday', 'Thrusday', 'friday', 'Saturday']
days.splice(1,2) //removes Test from index 1 and removes 2 items from that
console.log('updated array:', days)
days.splice(1, 2, 'removed', 'removed2')
console.log('updated array2:', days)

//add wednesday  between Monday and Tuesday
days = ['Monday', 'Test', 2, 'Tuesday', 'Thrusday', 'friday', 'Saturday']
days.splice(1,2)
console.log('array after removing unwanted data:', days)
days.splice(2,0, 'Wednesday')
console.log(days)
// new_days.splice(2, 'Wednesday')
// console.log('updated array3:', new_days)
