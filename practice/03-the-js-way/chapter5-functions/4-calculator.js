const calculate = (num1, operator, num2) =>
  operator === "+"
    ? num1 + num2
    : operator === "-"
    ? num1 - num2
    : operator === "*"
    ? num1 * num2
    : operator === "/"
    ? num1 / num2
    : "not recognized";

console.log(calculate(4, "+", 6));
console.log(calculate(4, "-", 6));
console.log(calculate(2, "*", 0));
console.log(calculate(12, "/", 0));
console.log(calculate(12, "sad", 5));
