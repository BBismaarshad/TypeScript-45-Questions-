let guestList = [
    "Alishba",
    "Rohma",
    "Faiza",
    "Laiba",
    "Zara",
    "Bisma",
    "Areeba",
];
console.log(`unfortunately, I can invite only two people for dinner.`);
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Dear ${removeGuest}, I m so sorry but i can't invite you to dinner . Maybe next time!`);
}
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to dinner! I'm looking forward to seeing you.`);
});
guestList = [];
console.log(guestList);
export {};
