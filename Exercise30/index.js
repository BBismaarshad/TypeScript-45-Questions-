let current_Users = ["Bisma", "Alisbha", "admin", "Rohma"];
let new_Users = ["Laiba", "Faiza", "User1", "admin", "User2"];
for (let new_user of new_Users) {
    // loop through the new_users list
    if (current_Users.includes(new_user.toLowerCase())) {
        // check if the new username is already in use (case insensitive)
        console.log(`Sorry, ${new_user} is already in use. Please enter a new username.`); // print a message if the username is already in use
    }
    else {
        console.log(`${new_user} is available!`); // print a message if the username is available
    }
}
export {};
