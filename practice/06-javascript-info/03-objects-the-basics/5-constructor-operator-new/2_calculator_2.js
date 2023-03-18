// --- ************ --- //
// --- [2023-03-09] --- //
// --- ************ --- //

// Create new Calculator
// https://javascript.info/constructor-new#create-new-calculator
// importance: 5

// Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

// For instance:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// <<<<<<< SOLUTION >>>>>>> //
const prompt = require("prompt-sync")();

// let calculator = {
//   read() {
//     // this.a = Number(prompt("Enter value 1: "));
//     this.a = +prompt("Enter value 1: ", 0);
//     this.b = Number(prompt("Enter value 2: "));
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

function Calculator() {
  (this.read = function () {
    this.a = +prompt("Enter value 1: ", 0);
    this.b = +prompt("Enter value 2: ", 0);
  }),
    (this.sum = function () {
      return this.a + this.b;
    }),
    (this.mul = function () {
      return this.a * this.b;
    });
}

let calculator = new Calculator();

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
