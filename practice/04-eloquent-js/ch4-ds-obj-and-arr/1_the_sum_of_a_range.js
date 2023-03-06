// let numbers = []

// function range(startNum, endNum, step) {
//     if (endNum < startNum) {

//         if(!step) {
//             step = -1
//         }

//         if(step >= 0) {
//             step *= -1
//         }

//         for (let i = startNum; i >= endNum; i += step) {
//             numbers.push(i)
//         }
//     } else {
//         if(!step) {
//             step = 1
//         }

//         for (let i = startNum; i <= endNum; i += step) {
//             numbers.push(i)
//         }
//     }
//     return numbers
// }

// function sum(number) {
//     let sum = 0
//     for (let number of numbers) {
//         sum += number
//     }
//     return sum
// }

// // console.log(sum(range(1, 15)))
// console.log(range(20, 15, 1.5))

// --- ************ --- //
// --- [2023-03-06] --- //
// --- ************ --- //

// https://eloquentjavascript.net/04_data.html#i_8ZspxiCEC/

// The sum of a range

// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

let numbers = [];

function range(start, end) {
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
}

console.log(range(1, 10));
// console.log(sum(range(1, 10)));
