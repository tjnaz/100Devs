// let arr = [1, 2, 3, 4, 5]
// let arr2 = []
// let arrayLength = arr.length

// // ^ Apprantly can't use the built-in reverse function
// // function reverseArray(arr) {
// //     let arr2 = arr.slice()
// //     return arr2.reverse()
// // }

// // function reverseArrayInPlace(arr) {
// //     return arr = arr.reverse()
// // }

// function reverseArray(arr) {
//     for (i = 0; i < arr.length; i++) {
//         arr2.unshift(arr[i])
//     }
//     return arr2
// }

// function reverseArrayInPlace(arr) {
//     arr.forEach((element, index) => {
//         arr.unshift(arr[index * 2])
//     })
//     arr.splice(arrayLength, arrayLength)
//     return arr
// }

// console.log(reverseArray(arr))
// console.log(arr)
// console.log(reverseArrayInPlace(arr))
// console.log(arr)

// --- ************ --- //
// --- [2023-03-06] --- //
// --- ************ --- //

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverseArray(arr) {
  let duplicateArr = arr.slice();
  let arrayLength = arr.length;

  for (let i = 1; i < arrayLength; i++) {
    duplicateArr.unshift(arr[i]);
  }

  duplicateArr.splice(arrayLength, duplicateArr.length - 1);
  return duplicateArr;
}

function reverseArrayInPlace(arr) {
  let duplicateArr = arr.slice();
  let arrayLength = duplicateArr.length;

  for (let i = 1; i < arrayLength; i++) {
    arr.unshift(duplicateArr[i]);
  }
  arr.splice(arrayLength, arr.length - 1);
  return arr;
}

// reverseArray(array);
reverseArrayInPlace(array);
console.log(array);
