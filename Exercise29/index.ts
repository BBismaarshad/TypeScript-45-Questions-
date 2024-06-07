let current_users: string[] = []; //empty array of usernames
let new_users: string[] = ["bisma", "ROHMA", "newuser1", "newuser2", "FaIzA"]; // list of new usernames

if (current_users.length > 0) {
  // check if the list is not empty
  for (let new_user of new_users) {
    // loop through the new_users list
    if (current_users.includes(new_user.toLowerCase())) 
    {
      // check if the new username is already in use (case insensitive)
      console.log(
        `Sorry, ${new_user} is already in use. Please enter a new username.`
      ); // print a message if the username is already in use
    } else {
      console.log(`${new_user} is available!`); // print a message if the username is available
    }
  }
} else {
  console.log("We need to find some users!"); // print a message if the list is empty
}
