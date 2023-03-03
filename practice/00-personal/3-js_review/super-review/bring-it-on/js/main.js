// *Variables*
// Create a variable and console log the value
let var1 = 21;
console.log(var1);

// Create a variable, add 10 to it, and alert the value
let var2 = 56;
console.log(var2 + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNum(a, b, c, d) {
  return a - b - c - d;
}
console.log(subFourNum(16, 5, 2, 6));

// Create a function that divides one number by another and returns the remainder
function divideMe(a, b) {
  return a % b;
}
console.log(divideMe(6, 2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(a, b) {
  let sum = a + b;

  if (sum > 50) {
    console.log("Jumanji");
  }
}
addTwo(56, 6);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mulThreeNums(a, b, c) {
  let sum = a * b * c;

  if (sum % 3 === 0) {
    console.log("ZEBRA");
  }
}
mulThreeNums(6, 3, 9);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopWordTimesNum(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}
loopWordTimesNum("hello", 5);
