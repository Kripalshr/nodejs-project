// let value = "Hello World!";

// const newValue = "This is constant value";
// console.log(value);
// console.log(newValue);

// let students = ['ram', 'shyam', 'hari'];
// console.log(`The first value of the array is ${students[students.length-1]}`); 
// students[0] = "someone";
// console.log(`The first value of the array after updating is ${students[0]}`);
// console.log(`The length of the array is ${students.length}`);

// students.push('Pukar')
// console.log(students);

// students.shift()
// console.log(students);

// console.log(students.length)

// const getInfo = (name, age) => {
//     return `My name is ${name} and my age is : ${age}`;
//     // return "My name is " + name + " and my age is : " + age;

// }
// console.log(getInfo("Kripal", "21"));


// const getFullName = (firstName, lastName, makeUpperCB) => {
//     return makeUpperCB(`${firstName} ${lastName}`)
// }

// const makeUpper = (name) => {
//     return name.toUpperCase( )
// }

// let fullName = getFullName("Kripal", "Shrestha", makeUpper);
// console.log(fullName);

// const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// array.forEach((element, index) => console.log(element, index));

// // Ternary Operator
// const age = 21;
// console.log(age == 22 ? "Age is correct" : "age is not correct");

// let animal = {
//     'name' : 'cow',
//     'age' : 10,
//     'color' : 'white'
// }

// let newAnimal = {};
// newAnimal.name = 'Dog';
// newAnimal.age = 12;
// newAnimal.color = 'golden'

// console.log(animal['color'])
// console.log(newAnimal.age)

let myIntro = {
    f_name: 'Kripal',
    l_name: 'Shrestha',
    age: 20,
    address: 'Kirtipur, Kathmandu',
    phone: '9851085685'
}

console.log(myIntro.f_name);