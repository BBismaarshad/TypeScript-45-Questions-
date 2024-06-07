"use strict";
let placesToVisit = [
    "Pakistan",
    "Saudi Arabia",
    "Turkish",
    "New york City",
];
//Print original order of the array
console.log("original order:");
console.log(placesToVisit);
//print the aray in alphabetical order without modifying the original list
console.log("Alphabetical order (without modifying the original list): ");
console.log([...placesToVisit].sort());
//print the orignal order of the array again to show it's still the same
console.log("original order(still the same):");
console.log(placesToVisit);
//print the array in revese alphabetical order without modifying the original list
console.log("Reverse alphabetical order (without modifying the original list):");
console.log([...placesToVisit].sort().reverse());
//print the original order of the array anagin to show it's sitll the sameR
console.log("original order (still the same):");
console.log(placesToVisit);
//revese the order of the list 
console.log("Reversing the order of the list: ");
placesToVisit.reverse();
console.log(placesToVisit);
//revese the order of the list anain to get it back to the original order
console.log("Reversing the order of the list again: ");
placesToVisit.reverse();
console.log(placesToVisit);
//sort the array in array in alphabetical order
console.log("sorting the array in alphabaetical order: ");
placesToVisit.sort();
console.log(placesToVisit);
//sort the array in reverse alphabetical order
console.log("sorting the array in reverse alphabetical order");
placesToVisit.sort().reverse();
console.log(placesToVisit);
