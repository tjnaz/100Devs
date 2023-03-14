// --- ************ --- //
// --- [2023-03-14] --- //
// --- ************ --- //

// Shuffle an array
// https://javascript.info/array-methods#shuffle-an-array
// importance: 3

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...

// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

// <--- SOLUTION ---> //

// Fisher-Yates Shuffle
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    //
    // random index from 0 to i
    let j = Math.floor(Math.random() * (i + 1));
    //
    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// counts of appearances for all possible permutations
let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join("")]++;
}

// show counts of all possible permutations
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}
