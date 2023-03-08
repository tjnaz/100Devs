// // https://javascript.info/object#sum-object-properties

// // Sum object properties
// // importance: 5

// // We have an object storing salaries of our team:

let salaries = {
  john: 100,
  Ann: 160,
  Pete: 130,
};

// // Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// // If salaries is empty, then the result must be 0.

// function sumObjProp(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// }

// console.log(sumObjProp(salaries));

// --- ************ --- //
// --- [2023-03-08] --- //
// --- ************ --- //

function sumObjProp(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

console.log(sumObjProp(salaries));
