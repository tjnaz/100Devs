// // ! forEach is skipping an index after removing it.
// function filterRangeInPlace(arr, a, b) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1)
//             i--
//         }
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// filterRangeInPlace(arr, 3, 7)

// console.log(arr)

// --- ************ --- //
// --- [2023-03-05] --- //
// --- ************ --- //

// https://javascript.info/array-methods#filter-range-in-place

// Filter range "in place"
// importance: 4

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b) {
  return arr.map((e, i) => e >= a && e <= b ? e : arr.splice(i, 1));
}

filterRangeInPlace(arr, 1, 4);
console.log(arr);
