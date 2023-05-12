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

// // refactor
// new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000))
//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   })
//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   })
//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   })
//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   });

// // 1. not proper chaining
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

// // 2. Returning promises
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// })
//   .then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(result * 2);
//       }, 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(result * 2);
//       }, 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(result * 2);
//       }, 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//   });

// // refactor: 2. Returning Promises
// new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000))
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) =>
//       setTimeout(() => resolve(result * 2), 1000)
//     );
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) =>
//       setTimeout(() => resolve(result * 2), 1000)
//     );
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) =>
//       setTimeout(() => resolve(result * 2), 1000)
//     );
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) =>
//       setTimeout(() => resolve(result * 2), 1000)
//     );
//   });

// // 3. example: loadScript
// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => resolve(script);
//     script.onerror = () =>
//       reject(new Error(`!!!!Script load error for ${src}`));
//     document.body.append(script);
//   });
// }
// loadScript("./script.js")
//   .then((script) => loadScript("./one.js"))
//   .then((script) => loadScript("./two.js"))
//   .then((script) => loadScript("./three.js"))
//   .then((script) => {
//     one();
//     two();
//     three();
//   });

// // 4. Bigger Example: Fetch
// fetch("https://javascript.info/article/promise-chaining/user.json")
//   .then((res) => res.json())
//   .then((user) => fetch(`https://api.github.com/users/${user.name}`))
//   .then((res) => res.json())
//   .then((ghUser) => {
//     let img = document.createElement("img");
//     img.src = ghUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
//     setTimeout(() => img.remove(), 3000);
//   })
//   .then();

// splitting code to different functions
function loadJson(url) {
  return fetch(url).then((res) => res.json());
}

function loadGithubUser(name) {
  return loadJson(`https://api.github.com/users/${name}`);
}

function showAvatar(githubUser) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  });
}

// use them
loadJson("https://javascript.info/article/promise-chaining/user.json")
  .then((user) => loadGithubUser(user.name))
  .then(showAvatar)
  .then((githubUser) => console.log(`Finished showing ${githubUser.name}`));
