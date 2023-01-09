// let value = "Hello World!";

// const newValue = "This is constant value";
// console.log(value);
// console.log(newValue);

let students = ['ram', 'shyam', 'hari'];
console.log(`The first value of the array is ${students[students.length-1]}`); 
students[0] = "someone";
console.log(`The first value of the array after updating is ${students[0]}`);
console.log(`The length of the array is ${students.length}`);

students.push('Pukar')
console.log(students);

students.shift()
console.log(students);

console.log(students.length)