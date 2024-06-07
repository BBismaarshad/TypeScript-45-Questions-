"use strict";
let guestList = ["Alishba", "Rohma", "Laiba", "Faiza",];
// Initial invitations
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, I am thrilled to invite you to a dinner party at my place! Your innovative ideas,
   groundbreaking discoveries, and legendary leadership would make for a fascinating evening of conversation.
   Please join me for a night of inspiration and delicious food.`);
});
// Announce limited space
console.log(`Unfortunately, I can invite only two people for dinner.`);
// Remove guests until only two remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Dear ${removedGuest}, I'm so sorry, but I can't invite you to dinner. Maybe next time!`);
}
// Confirm remaining guests
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to dinner! I'm looking forward to seeing you.`);
});
// Guest who can't make it
let cantMakeIt = "Bisma";
console.log(`${cantMakeIt} can't make it to the dinner.`);
// New invitations
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, I am thrilled to invite you to a dinner party at my place! Your innovative ideas,
     groundbreaking discoveries, and legendary leadership would make for a fascinating evening of conversation.
      Please join me for a night of inspiration and delicious food.`);
});
