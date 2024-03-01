//forin

var fruits = ['apple', 'peach', 'orange', 'grapes']

for (index in fruits)
{
  //print index of eavery element
    console.log(index)
  //print the count of the index with name
    console.log(`${index} th fruit is`, (fruits[index]))
  //print the  without index fruit
    console.log("Name and index of the fruit is " + fruits[index])
  //print array
    console.log(fruits)
}