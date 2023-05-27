// // 1. Basic import/export
// // import Person from "./person"; // es6
// const person = require("./person"); // common js
// console.log(person.name);

// 2. using class
const Person = require("./person"); // common js
const person1 = new Person("john doe", 30);
console.log(person1.greeting());
