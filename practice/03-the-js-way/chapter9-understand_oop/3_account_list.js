// --- ************ --- //
// --- [2023-03-10] --- //
// --- ************ --- //

// Account list
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md#account-list

// Let's build upon a previous account object exercise. A bank account is still defined by:

//     A name property.
//     A balance property, initially set to 0.
//     A credit method adding the value passed as an argument to the account balance.
//     A describe method returning the account description.

// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }
  credit() {
    return (this.balance += 1000);
  }
  description() {
    return `owner: ${this.name}, balance: ${this.balance}`;
  }
}

const sean = new Account("Sean");
const brad = new Account("Brad");
const georges = new Account("Georges");

sean.credit();
brad.credit();
georges.credit();

console.log(sean.description());
console.log(brad.description());
console.log(georges.description());
