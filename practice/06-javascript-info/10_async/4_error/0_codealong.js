// Error handling with promises
// // 0_Boilerplate
// fetch("https://no-such-server.blable")
//   .then((res) => res.json())
//   .catch((err) => console.log(err));
// fetch("https://javascript.info/article/promise-chaining/user.json")
//   .then((response) => response.json())
//   .then((user) => fetch(`https://api.github.com/users/${user.name}`))
//   .then((response) => response.json())
//   .then(
//     (githubUser) =>
//       new Promise((resolve, reject) => {
//         let img = document.createElement("img");
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);
//         setTimeout(() => {
//           img.remove();
//           resolve(githubUser);
//         }, 3000);
//       })
//   )
//   .catch((error) => console.log(error.message));

// // 1. Implicit try...catch
// new Promise((resolve, reject) => {
//   throw new Error("Whoopsie daisie");
// }).catch(console.log);
// new Promise((resolve, reject) => {
//   reject(new Error("whoopsie daisyy!!!"));
// }).catch(console.log);

// // 2. Rethrowing
// // the execution: catch -> then
// // new Promise((resolve, reject) => {
// //   throw new Error("you done messed up aa ron");
// // })
// //   .catch((error) => {
// //     console.log("the error is handled");
// //   })
// //   .then(() => console.log("next successful handler runs"));
// // the execution: catch -> catch
// new Promise((resolve, reject) => {
//   throw new Error("every frkn time");
// })
//   .catch((error) => {
//     if (error instanceof URIError) {
//       // handle the error
//     } else {
//       console.log("can't handle the error, passing on...");
//       throw error;
//     }
//   })
//   .then(() => {
//     // doesn't run here
//   })
//   .catch((error) => {
//     console.log(`the unknown error has occurred, ${error}`);
//   });

// 3. Undhandled rejections
window.addEventListener("unhandledrejection", (event) => {
  // the event object has TWO properties
  console.log(event.promise); // [object Promise] - the promise that generated the error
  console.log(event.reasnon); // Error: ${error} - the unhandled error object
});

new Promise((resolve, reject) => {
  throw new Error("yo yo yo!");
});
