// create an array of magician's names
const magicians: string[] = [
  "David Copperfield",
  " Dynamo",
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

// pass the array to the show_magicians function
show_magicians(magicians);
