// let arr = [10, 15, 245, 412, 7, 97, 16, 100, 150, 50]

// // *MY SOLUTION* //
// arr.sort((a, b) => a - b).reverse()
// console.log(arr)

// // *GIVEN SOLUTION* //

// // console.log(arr.sort((a, b) => b - a))

// --- ************ --- //
// --- [2023-03-05] --- //
// --- ************ --- //

// https://javascript.info/array-methods#sort-in-decreasing-order

// Sort in decreasing order
// importance: 4

let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// alert( arr ); // 8, 5, 2, 1, -10

console.log(arr.sort((a, b) => b - a));
