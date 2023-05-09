// Promise Chaining

// // 0. basic syntax
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// })
//   .then(function (result) {
//     console.log(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result);
//     return result * 2;
//   });

// // not proper chaining
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });
// promise.then(function (result) {
//   console.log(result);
//   return result * 2;
// });
// promise.then(function (result) {
//   console.log(result);
//   return result * 2;
// });
// promise.then(function (result) {
//   console.log(result);
//   return result * 2;
// });
// promise.then(function (result) {
//   console.log(result);
//   return result * 2;
// });

// Returning promises
new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then(function (result) {
    console.log(result);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 1000);
    });
  })
  .then(function (result) {
    console.log(result);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 1000);
    });
  })
  .then(function (result) {
    console.log(result);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 1000);
    });
  })
  .then(function (result) {
    console.log(result);
  });
