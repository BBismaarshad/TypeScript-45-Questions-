"use strict";
let guestList = ["Alishba", "Rohma", "Faiza", "Laiba"];
//Initial invitation
//Found a bigger dinner table
console.log("Great news! I've found a bigger dinner table, so I can invite more guests!");
//Add new guest to the beginning of the array 
guestList.unshift("zara");
//Add new guest to the middle of the array
guestList.splice(3, 0, "Bisma");
//Add new guest to the end of the array
guestList.push("Areeba");
//New invitation
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, I am thrilled to invite yoou to a dinner party at my place!
    your innovative ideas,groundbreaking discoveries, and legendary leadership would make 
    for a fascinating evening of conversation. please join me for a night of inspiration and delicious food.`);
});
