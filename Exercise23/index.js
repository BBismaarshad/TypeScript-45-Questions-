// Version 1: Alien color is green (passes the if test)
let alien_color = 'green'; // assign the value 'green' to the variable alien_color
if (alien_color === 'green') { // test if the alien's color is green
    console.log('Player just earned 5 points!'); // print a message if the condition is true
}
// Version 2: Alien color is yellow (fails the if test)
let alien_colorr = 'yellow'; // assign the value 'yellow' to the variable alien_color
if (alien_colorr === 'green') { // test if the alien's color is green
    console.log('Player just earned 5 points!'); // this message will not be printed
}
export {};
