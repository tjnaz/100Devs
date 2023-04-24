// const calculate = (num1, operator, num2) =>
//   operator === "+"
//     ? num1 + num2
//     : operator === "-"
//     ? num1 - num2
//     : operator === "*"
//     ? num1 * num2
//     : operator === "/"
//     ? num1 / num2
//     : "not recognized";

// console.log(calculate(4, "+", 6));
// console.log(calculate(4, "-", 6));
// console.log(calculate(2, "*", 0));
// console.log(calculate(12, "/", 0));
// console.log(calculate(12, "sad", 5));

// -- ************ --- //
// --- [2023-04-24] --- //
// --- ************ --- //

// Calculator
// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// TODO: complete program
const calculate = (num1, op, num2) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
};

console.log(calculate(4, "+", 6)); // Must show 10
console.log(calculate(4, "-", 6)); // Must show -2
console.log(calculate(2, "*", 0)); // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
