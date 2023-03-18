// --- ************ --- //
// --- [2023-03-09] --- //
// --- ************ --- //

// https://javascript.info/constructor-new#two-functions--one-object
// Two functions – one object
// importance: 2

// Is it possible to create functions A and B so that new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

// If it is, then provide an example of their code.

// Hmm it's possible.

// If a function returns an object then new returns it instead of this.

// So they can, for instance, return the same externally defined object obj:

const obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

console.log(new A() == new B()); // true

// --- ************ --- //
// --- [2023-03-10] --- //
// --- ************ --- //

// function BigUser() {
//   this.name = "John";
//   return { name: "baba" };
// }

// let pp = new BigUser();

// console.log(pp.name);
