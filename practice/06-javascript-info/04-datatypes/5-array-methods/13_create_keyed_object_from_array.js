// --- ************ --- //
// --- [2023-03-15] --- //
// --- ************ --- //

// Create keyed object from array
// https://javascript.info/array-methods#create-keyed-object-from-array
// importance: 4

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

// /*
// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */

// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.

// TODO: gonna have to definitely revise
// function groupById(users) {
//   return users.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {});
// }

// MAYANWOLFE'S SOLUTION <-- MUCH EASIER TO FOLLOW
function groupById(users) {
  let result = {};
  users.forEach((e) => (result[e.id] = e));
  return result;
}

console.log(usersById);
