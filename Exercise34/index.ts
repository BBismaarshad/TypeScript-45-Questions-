function make_shirt(size: string, message: string): void {
  // print a sentence summarizing the size of the shirt and the message printed on it
  console.log(`The size ${size} shirt will have "${message}" printed on it.`);
}

// call the function
make_shirt("Large", "I love TypeScript!"); // output: The size Large shirt will have "I love TypeScript!" printed on it.
