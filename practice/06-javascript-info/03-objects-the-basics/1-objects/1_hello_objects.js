// let user = {};

// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";

// delete user.surname;

// console.log(user);

// --- ************ --- //
// --- [2023-03-08] --- //
// --- ************ --- //

// https://javascript.info/object#hello-object

// Hello, object
// importance: 5

// Write the code, one line for each action:

//     Create an empty object user.
//     Add the property name with the value John.
//     Add the property surname with the value Smith.
//     Change the value of the name to Pete.
//     Remove the property name from the object.

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.table(user);
