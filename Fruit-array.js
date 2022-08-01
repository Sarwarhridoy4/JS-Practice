// Finding Banana in given Array

var fruits = ['Apple', 'Banana', 'Orange'];
var fruitIndex = fruits.indexOf('Banana');
console.log('Index of Asked fruit is:', fruitIndex);

// Replace Banana with Mango

fruits[1] = 'Mango';
var fruitIndex = fruits[1];
console.log('Index of Asked fruit is now:', fruitIndex);

// Removing Orange:

fruits.pop();
console.log('The Array is now:', fruits );

// Adding Watermelon in Array

fruits.push('Watermelon');
console.log('The Array is now:', fruits );
