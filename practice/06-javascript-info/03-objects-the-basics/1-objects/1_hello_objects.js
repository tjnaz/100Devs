// let user = {};

// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";

// delete user.surname;

// console.log(user);

// --- ************ --- //
// --- [2023-03-08] --- //
// --- ************ --- //

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.table(user);
