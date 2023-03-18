// --- ************ --- //
// --- [2023-03-08] --- //
// --- ************ --- //

// https://javascript.info/object-methods#using-this-in-object-literal

// Using "this" in object literal
// importance: 5

// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref() {
      return this.name;
    },
  };
}
const user = makeUser();

console.log(user.ref());

// console.log(user.ref.name); // What's the result? // Error: Cannot read property 'name' of undefined
