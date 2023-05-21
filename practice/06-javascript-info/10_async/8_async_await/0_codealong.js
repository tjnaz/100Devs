// 8_Async/Await
// // 1. async functions
// async function f() {
//   return 1;
// }
// //
// f().then(console.log);

// 2. await
// The function execution "pauses" at the line (*) and resumes when the promise settles
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000);
  });
  //
  let result = await promise; // wait until the promise resolves(*)
  //
  console.log(result);
}
//
f();
