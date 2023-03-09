// --- ************ --- //
// --- [2023-03-09] --- //
// --- ************ --- //

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");
let user2 = new User("Rose");

console.table(user);
console.table(user2);

function BigUser(name) {
  this.name = name;

  return { name: "Godzilla" };
}

console.table(new BigUser().name);
