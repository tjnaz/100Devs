// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function evalArray(arr) {
  const first = arr[0];
  const last = arr[arr.length - 1];

  if (first < last) {
    console.log("Hi");
  } else if (first > last) {
    console.log("Bye");
  } else {
    console.log("We close in an hour");
  }
}

evalArray([7, 7]);
