// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ['I', 'learn', 'fix', 'excel', 'win', 'study', 'complex', 'language', 'study']

// let sorted = copySorted(arr)

// console.log(sorted)
// console.log(arr)

// --- ************ --- //
// --- [2023-03-05] --- //
// --- ************ --- //

// https://javascript.info/array-methods#copy-and-sort-array

// Copy and sort array
// importance: 5

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// function copySorted(arr) {
//   let sortedArray = [];
//   arr.forEach((e) => {
//     sortedArray.push(e);
//   });
//   return sortedArray.sort();
// }

// THIS IS JUST AWESOME !!!
function copySorted(arr) {
  return arr.slice().sort();
}

let sorted = copySorted(arr);
console.log(arr);
console.log(sorted);
