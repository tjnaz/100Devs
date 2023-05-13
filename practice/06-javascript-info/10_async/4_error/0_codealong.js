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

// 1. Implicit try...catch
new Promise((resolve, reject) => {
  throw new Error("Whoopsie daisie");
}).catch(console.log);

new Promise((resolve, reject) => {
  reject(new Error("whoopsie daisyy!!!"));
}).catch(console.log);
