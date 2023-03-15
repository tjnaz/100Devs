// --- ************ --- //
// --- [2023-03-15] --- //
// --- ************ --- //

// Filter unique array members
// https://javascript.info/array-methods#filter-unique-array-members
// importance: 4

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   /* your code */
// }

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

// alert( unique(strings) ); // Hare, Krishna, :-O

function unique(arr) {
  let uniqueArr = [];

  // uniqueArr.push(arr[0]);
  // for (let i = 1; i < arr.length; i++) {
  //   !uniqueArr.includes(arr[i]) && uniqueArr.push(arr[i]);
  // }

  arr.forEach((e) => !uniqueArr.includes(e) && uniqueArr.push(e));

  return uniqueArr;
}

console.log(unique(strings));
