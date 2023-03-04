// https://javascript.info/function-basics#rewrite-the-function-using-or

// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

//     Using a question mark operator ?
//     Using OR ||

function checkAge(age) {
  // age > 18 ? true : console.log("Did parents allow you?");
  age > 18 || console.log("Did parents allow you?");
}

checkAge(10);
