// // Module Wrapper function
// (function (exports, require, module, __filename, __dirname){
// // ** function code ** //
// })
//
// const person = {
//   name: "john doe",
//   age: 10,
// };
// module.exports = person;

console.log(__filename);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `the name's ${this.name}, ${this.age} old.`;
  }
}

module.exports = Person;
