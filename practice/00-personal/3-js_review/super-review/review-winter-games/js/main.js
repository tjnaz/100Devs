//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function filterArr(arr) {
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 === 0) {
  //     newArr.push(arr[i]);
  //   }
  // }
  // arr.forEach((e) => {
  //   if (e % 2 === 0) {
  //     newArr.push(e);
  //   }
  // });
  // return newArr;
  // return arr.map((e) => e % 2 === 0); <- this returs true/false not the array itself
  return arr.filter((e) => e % 2 === 0);
}
console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));
