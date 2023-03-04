// https://javascript.info/function-basics#function-pow-x-n

// Function pow(x,n)
// importance: 4

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// P.S. In this task the function should support only natural values of n: integers up from 1.

function pow(x, n) {
  let sum = 1;
  for (let i = 0; i < n; i++) {
    sum *= x;
  }
  return sum;
}

console.log(pow(4, 2));
