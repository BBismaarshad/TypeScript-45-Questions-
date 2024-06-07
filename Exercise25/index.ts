// Version 1: Alien color is green
let alien_color: string = "green"; // assign the value 'green' to the variable alien_color
if (alien_color === "green") {
  // test if the alien's color is green
  console.log("Player earned 5 points!"); // print a message if the condition is true
} else if (alien_color === "yellow") {
  console.log("This code will not run because the alien is not yellow!");
} else {
  console.log("This code will not run because the alien is not red!");
}

// Version 2: Alien color is yellow

let alien_colorr: string = "yellow"; // assign the value 'yellow' to the variable alien_color
if (alien_colorr === "green") {
  // test if the alien's color is green
  console.log("This code will not run because the alien is not green!");
} else if (alien_colorr === "yellow") {
  console.log("Player earned 10 points!"); // print a message if the condition is true
} else {
  console.log("This code will not run because the alien is not red!");
}

// Version 3: Alien color is red

let alien_colr: string = "red"; // assign the value 'red' to the variable alien_color
if (alien_colr === "green") {
  // test if the alien's color is green
  console.log("This code will not run because the alien is not green!");
} else if (alien_colr === "yellow") {
  console.log("This code will not run because the alien is not yellow!");
} else {
  console.log("Player earned 15 points!"); // print a message if the condition is true
}
