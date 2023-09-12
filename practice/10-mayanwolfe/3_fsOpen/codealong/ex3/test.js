const fs = require("fs");
// did this actually work ffs?

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const x = fib(5);
const y = fib(8);

console.log("x: ", x, "| y: ", y);
