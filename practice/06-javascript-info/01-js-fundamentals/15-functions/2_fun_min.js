// https://javascript.info/function-basics#function-min-a-b

// Function min(a, b)
// importance: 1

// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function findMin(a, b) {
  return a < b ? a : b;
}

console.log(findMin(15, 5));
