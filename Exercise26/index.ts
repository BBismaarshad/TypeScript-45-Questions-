let age: number = 25; // set a value for the variable age

if (age < 2) {
  // test if the person is less than 2 years old
  console.log("The person is a baby."); // print a message if the condition is true
} else if (age >= 2 && age < 4) {
  // test if the person is at least 2 years old but less than 4
  console.log("The person is a toddler."); // print a message if the condition is true
} else if (age >= 4 && age < 13) {
  // test if the person is at least 4 years old but less than 13
  console.log("The person is a kid."); // print a message if the condition is true
} else if (age >= 13 && age < 20) {
  // test if the person is at least 13 years old but less than 20
  console.log("The person is a teenager."); // print a message if the condition is true
} else if (age >= 20 && age < 65) {
  // test if the person is at least 20 years old but less than 65
  console.log("The person is an adult."); // print a message if the condition is true
} else {
  // test if the person is age 65 or older
  console.log("The person is an elder."); // print a message if the condition is true
}
