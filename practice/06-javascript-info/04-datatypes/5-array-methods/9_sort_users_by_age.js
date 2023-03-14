// --- ************ --- //
// --- [2023-03-14] --- //
// --- ************ --- //

// Sort users by age
// https://javascript.info/array-methods#sort-users-by-age
// importance: 5

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

console.log(sortByAge(arr));

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}
