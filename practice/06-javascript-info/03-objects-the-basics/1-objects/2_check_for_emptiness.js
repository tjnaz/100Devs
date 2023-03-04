// https://javascript.info/object#check-for-emptiness

// Check for emptiness
// importance: 5

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// My code at first attempt
// function isEmpty(obj) {
//   let objArr = [];
//   for (let key in obj) {
//     objArr.push(key);
//   }
//   return objArr.length > 0 ? false : true;
// }

let isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

let obj = {};
// obj.name = "bike";
// obj.age = 10;

console.log(isEmpty(obj));
