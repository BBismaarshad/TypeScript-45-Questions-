"use strict";
//string equality and inequqlity tests
let str = "hello";
console.log("Is str ==='hello'? I predict true."); //prediction: ture
console.log(str === 'hello'); //result: ture
console.log("Is str === 'goodbye' ? I predict false."); //prediction: false
console.log(str === 'goodbye'); //result: false
// Tests using the lower case function
console.log("Is str.toLowerCase() == 'hello'? I predict True."); // Prediction: True
console.log(str.toLowerCase() == 'hello'); // Result: True
console.log("Is str.toLowerCase() == 'goodbye'? I predict False."); // Prediction: False
console.log(str.toLowerCase() == 'goodbye'); // Result: False
// Numerical tests
let num = 5;
console.log("Is num == 5? I predict True."); // Prediction: True
console.log(num == 5); // Result: True
console.log("Is num > 10? I predict False."); // Prediction: False
console.log(num > 10); // Result: False
console.log("Is num >= 5? I predict True."); // Prediction: True
console.log(num >= 5); // Result: True
console.log("Is num");
console.log(num);
console.log("Is num");
console.log(num <= 5); // Result: True
// Tests using "and" and "or" operators
let age = 25;
console.log("Is age > 18 && age");
console.log(age > 18 && age);
console.log("Is age > 18 || age");
console.log(age > 18 || age);
console.log("Is age");
console.log(age < 18 && age > 30); // Result: False
// Tests whether an item is in a array
let colors = ['red', 'green', 'blue'];
console.log("Is 'red' in colors? I predict True."); // Prediction: True
console.log(colors.includes('red')); // Result: True
console.log("Is 'yellow' in colors? I predict False."); // Prediction: False
console.log(colors.includes('yellow')); // Result: False
// Tests whether an item is not in a array
console.log("Is 'yellow' not in colors? I predict True."); // Prediction: True
console.log(!colors.includes('yellow')); // Result: True
console.log("Is 'red' not in colors? I predict False."); // Prediction: False
console.log(!colors.includes('red')); // Result: False
