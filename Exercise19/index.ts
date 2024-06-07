//define an interface for the person object

interface person{
    name: string;
    age: number;
    occupation: string;
}

//create a person object
let  person ={
name: "Bisma",
age : 20,
occupation: "Software Engineer"
};

//print the person object
console.log(person);

//creat an array of person objects
let people : person[] =[
    {
        name: "Alishba",
        age: 26,
        occupation: "Teacher"
    },
    {
        name: "Zara",
        age: 24,
        occupation: "Doctor",

     },
     {
        name: "Rohma",
        age: 28,
        occupation:"Artist"
     },
];
//print the array of person objects
console.log(people);

