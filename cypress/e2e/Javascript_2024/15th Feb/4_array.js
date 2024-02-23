array_nums = [1, 2, 3, 4, ]
console.log(array_nums[2])

let arra = new Array
arra[1] = 1
arra[0] = 0
console.log(arra)

let aray3 = new Array('DN', new Object())
console.log (aray3)

console.log(typeof(aray3))

//push adds from end
console.log('-----------Push-----------')
let push_ar = [1,2]
push_ar.push(10)
console.log(push_ar)

//pop removes from end
console.log('-----------pop-----------')
let pop_ar = [8, 9, 10, 11]
pop_ar.pop()
console.log(pop_ar)

//unshift adds from front
console.log('-----------unshift-----------')
let unshift_ar = ['a', 'b', 'v', 'd']
unshift_ar.unshift(3)
console.log(unshift_ar)

//shift removes from front
console.log('-----------shift-----------')
let shift_ar = ['x', 'y']
shift_ar.shift()
console.log(shift_ar)

console.log(shift_ar[0])

//splice adds the elements at specified locations
console.log('-----------splice_add-----------')
let spliceadd_ar = [1, 2, 33, 5, 4]
spliceadd_ar.splice(1,3,"he")
console.log(spliceadd_ar)

//splcie delete elements at specifiec locations
console.log('-----------splice_delete-----------')
let splicedelete_ar = ['DN', 'Sad', 'Die','Not','Happy', 'Wish']
splicedelete_ar.splice(1,3)
console.log(splicedelete_ar)

//slice
console.log('-------------Slice-------------')
let slice_ar = [1, 2, 3, 4, 5, 6]
let slice_ar2 = slice_ar.slice(1,4) //gives array of 2 and 3
let slice_ar4 = slice_ar.slice(4) // gives array without of index from 4 to n
console.log(slice_ar)
console.log(slice_ar2)
console.log(slice_ar4)



//print array
array = [10, 20, 30, 40]
//forEach
console.log('------------ForEach----------------')
array.forEach(i => console.log (i))

//forof
console.log('------------forof------------')
for (i of array)
{
    console.log(i)
}

//forin
console.log('------------forin------------')
for(i in array)
{
    console.log(`${i}th element of array is,: ${array[i]}`)
}
