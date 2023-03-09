// --- ************ --- //
// --- [2023-03-09] --- //
// --- ************ --- //

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
