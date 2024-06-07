"use strict";
//test 1 : string comparison
let car = "subaru";
console.log("Is car === 'subaru'? I predict True."); //prediction: true
console.log(car === "subaru"); // result: true
//test 2 : string comparison (differet values)
console.log("Is car ==='toyota'? I predict False."); //prediction : false
console.log(car === "toyota"); //result :false
//test 3 : number comparison
let age = 20;
console.log("Is age > 18? I predict True."); //prediction: true
console.log(age > 18); //result: true
//test 4 : number comparison (opposite condition)
console.log("Is age < 18 ? I predict False."); //prediction: false
console.log(age < 18); //result: false
//test 5 :string comparison (same value, different case)
let nme = "Bisma";
console.log("Is name === 'Bisma ? I predict True."); //prediction: true
console.log(nme === "Bisma"); // result: true
//test6  : string comparison
console.log("It name === 'Zara? I predict False."); //prediction: False
console.log(nme === "Zara");
//test7: boolean comparison
let isAdmin = true;
console.log("Is isAdmin === true? I predict True."); //prediction: true
console.log(isAdmin === true); //result: true
//test8 : number comparison (great than)
let num = 7;
console.log("Is num > 10? I predict False."); //prediction: false
console.log(num > 10); //result: false
// Test 9: Number comparison (less than or equal)
console.log("Is num <= 5? I predict false."); // Prediction: false
console.log(num <= 5); // Result: false
// Test 10: String comparison (empty string)
let emptyString = "";
console.log("Is emptyString == 'hello'? I predict False."); // Prediction: false
console.log(emptyString == "hello"); // Result: false
