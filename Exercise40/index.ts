//create an array of magician's names
const magicians: string[] = [
  "David Copperfield",
  "Dynamo",
  "Penn and Teller",
  "Derren Brown",
  "Criss Angel",
];

// define the show_magicians function
function show_magicians(magicians: string[]): void {
  // loop through the array of magicians
  for (const magician of magicians) {
    // print the name of each magician
    console.log(magician);
  }
}

// define the make_great function
function make_great(magicians: string[]): void {
  // loop through the array of magicians
  for (let i = 0; i < magicians.length; i++) {
    // add the phrase " the Great" to each magician's name
    magicians[i] = magicians[i] + " the Great";
  }
}

// call make_great to modify the array of magicians
make_great(magicians);

// call show_magicians to see the modified list
show_magicians(magicians);
