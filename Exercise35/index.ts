function make_shirt(
  size: string = "Large",
  message: string = "I love TypeScript"
): void {
  // print a sentence summarizing the size of the shirt and the message printed on it
  console.log(`The size ${size} shirt will have "${message}" printed on it.`);
}

// make a large shirt with the default message
make_shirt(); // output: The size Large shirt will have "I love TypeScript" printed on it.

// make a medium shirt with the default message
make_shirt("Medium"); // output: The size Medium shirt will have "I love TypeScript" printed on it.

// make a shirt of any size with a different message
make_shirt("Small", "I love JavaScript"); // output: The size Small shirt will have "I love JavaScript" printed on it.
