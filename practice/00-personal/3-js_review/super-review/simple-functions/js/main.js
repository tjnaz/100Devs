//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub(a, b) {
  return b - a;
}
// console.log(sub(5, 1));

//create a function that divides three numbers and console logs the quotient
function calQuotient(a, b, c) {
  return a / b / c;
}
// console.log(calQuotient(100, 2, 10));

//create a function that multiplys three numbers and returns the product
function mulThreeNums(a, b, c) {
  return a * b * c;
}
// console.log(mulThreeNums(2, 3, 5));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function sumTwoDivideThird(a, b, c) {
  return (a + b) % c;
}
// console.log(sumTwoDivideThird(5, 5, 3));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takeFourMulTwoCompare(a, b, c, d) {
  const firstTwo = a * b;

  if (firstTwo > 100) {
    return (firstTwo += c + d);
  } else if (firstTwo < 100) {
    return (firstTwo -= c + d);
  } else {
    return (a * b * c) % d;
  }
}
console.log(takeFourMulTwoCompare(50, 2, 2, 3));
