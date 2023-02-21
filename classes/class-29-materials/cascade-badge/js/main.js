//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

// function reverseList(partyOrder) {
//   let reversePartyOrder = [];
//   for (let i = partyOrder.length - 1; i >= 0; i--) {
//     reversePartyOrder.push(partyOrder[i]);
//   }
//   console.log(reversePartyOrder);
// }

function reverseList(partyOrder) {
  console.log(partyOrder.reverse());
}

let partyOrder = ["qw:p", "snth", "xblv", "jkmz"];

reverseList(partyOrder);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
const a = [3, 2, 5, 4];
const b = [1, 1, 1, 1];

function isABiggerThanB(a, b) {
  const sumA = a.reduce((result, item) => {
    return result + item ** 2;
  }, 0);
  const sumB = b.reduce((result, item) => {
    return result + item ** 3;
  }, 0);
  console.log(`${sumA}, ${sumB}`);
  return sumA > sumB;
}

console.log(`Is array A bigger than array B? ${isABiggerThanB(a, b)}`);

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function isDividable(numbers) {
  return numbers.filter((number, index) => number % index === 0);
}

console.log(isDividable([22, -6, 32, 82, 9, 25]));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + Number(num), 0);
}

console.log(sumArray(["22", "-6", 32, 82, 9, 25]));
