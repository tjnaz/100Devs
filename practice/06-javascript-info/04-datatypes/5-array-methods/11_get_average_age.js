// --- ************ --- //
// --- [2023-03-15] --- //
// --- ************ --- //

// Get average age
// https://javascript.info/array-methods#get-average-age
// importance: 4

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(obj) {
  return obj.reduce((acc, e) => (acc += +e.age), 0) / obj.length;
}

console.log(getAverageAge(arr));
