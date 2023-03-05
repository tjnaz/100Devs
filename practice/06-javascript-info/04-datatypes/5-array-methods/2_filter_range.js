// // *My Solution* //
// function filterRange(arr, a, b) {
//     let arr2 = []
//     arr.filter(item => item >= a && item <= b ? arr2.push(item) : null)
//     return arr2
// }

// let arr = [10, 15, 100, 150, 5000]

// console.log(filterRange(arr, 13, 200))

// // *PROVIDED ELEGANT SOLUTION TRIED AND UNDERSTOOD*/

// function filterRange2(arr, a, b) {
//     arr.filter(item => a <= item && b >= item)
// }

// let filteredArray = filterRange(arr, 13, 200)
// console.log(filteredArray)

// --- ************ --- //
// --- [2023-03-05] --- //
// --- ************ --- //

// https://javascript.info/array-methods#filter-range

// Filter range
// importance: 4

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((e) => e >= a && e <= b);
}

console.log(arr);
console.log(filterRange(arr, 1, 4));
console.log(arr);
