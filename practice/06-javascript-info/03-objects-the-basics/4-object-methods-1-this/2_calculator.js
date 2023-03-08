// --- ************ --- //
// --- [2023-03-08] --- //
// --- ************ --- //

// https://javascript.info/object-methods#create-a-calculator

// Create a calculator
// importance: 5

// Create an object calculator with three methods:

//     read() prompts for two values and saves them as object properties with names a and b respectively.
//     sum() returns the sum of saved values.
//     mul() multiplies saved values and returns the result.

// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

const prompt = require("prompt-sync")();

let calculator = {
  read() {
    // this.a = Number(prompt("Enter value 1: "));
    this.a = +prompt("Enter value 1: ", 0);
    this.b = Number(prompt("Enter value 2: "));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
