// 8_Async/Await
// // 1. async functions
// async function f() {
//   return 1;
// }
// //
// f().then(console.log);

// // 2. await
// // The function execution "pauses" at the line (*) and resumes when the promise settles
// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done"), 1000);
//   });
//   //
//   let result = await promise; // wait until the promise resolves(*)
//   //
//   console.log(result);
// }
// //
// f();

// // 3. showAvatar()
// async function showAvatar() {
//   // read JSON
//   let response = await fetch(
//     `https://javascript.info/article/promise-chaining/user.json`
//   );
//   let user = await response.json();
//   //
//   // read github user
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();
//   //
//   // show avatar
//   let img = document.createElement("img");
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);
//   //
//   // wait 3 seconds
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));
//   //
//   img.remove();
//   //
//   return githubUser;
// }
// //
// showAvatar();

// 4. Error handling with async/await
async function f() {
  try {
    let response = await fetch("no-such-url");
    let user = await response.json();
  } catch (err) {
    // catches errors both in fetch and response.json
    console.log(err);
  }
}
//
f();
