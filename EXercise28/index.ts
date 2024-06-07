let usernames: string[] = ["Bisma", "Rohma", "admin", "Faiza", "Laiba"]; // array of usernames

for (let username of usernames) {
  // loop through the array
  if (username === "admin") {
    // check if the username is 'admin'
    console.log(`Hello admin, would you like to see a status report?`); // print a special greeting
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`); // print a generic greeting
  }
}
