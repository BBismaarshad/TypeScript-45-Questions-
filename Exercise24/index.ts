// Version 1: Alien color is green (runs the if block)

let alien_color: string = "green"; // assign the value 'green' to the variable alien_color

if (alien_color === "green") {
  // test if the alien's color is green
  console.log("Player just earned 5 points for shooting the alien!"); // print a message if the condition is true
} else {
  console.log("This code will not run because the alien is green!");
}

// Version 2: Alien color is yellow (runs the else block)
let alien_coloor: string = "yellow";  // assign the value 'yellow' to the variable alien_color

if (alien_coloor === "green") {
  // test if the alien's color is green
  console.log("This code will not run because the alien is not green!");
} else {
  console.log("Player just earned 10 points!"); // print a message if the condition is false
}
