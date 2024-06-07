"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // array of numbers
for (let number of numbers) {
    // loop through the array
    if (number === 1) {
        // check if the number is 1
        console.log(`${number}st`); // print "1st"
    }
    else if (number === 2) {
        // check if the number is 2
        console.log(`${number}nd`); // print "2nd"
    }
    else if (number === 3) {
        // check if the number is 3
        console.log(`${number}rd`); // print "3rd"
    }
    else {
        // for all other numbers
        console.log(`${number}th`); // print the number with "th" ending
    }
}
