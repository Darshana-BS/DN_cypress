let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo'
console.log(condiments)

condiments = ['Mayo'];
console.log(condiments)

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[0] = 'D'
console.log(utensils)

utensils = 'D' //TypeError: Assignment to constant variable.
console.log(utensils)
