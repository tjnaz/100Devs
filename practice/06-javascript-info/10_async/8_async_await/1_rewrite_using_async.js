// 1. Rewrite using async/await
// Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:
//
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }
//
// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert); // Error: 404

// async function loadJson(url) {
//   try {
//     let response = await fetch(url);
//     let status = await response.status;
//     let user = await response.json();

//     if (status == 200) {
//       // console.log(response.json());
//       // console.log(user);
//       console.log(user.name);
//     } else {
//       throw new Error(response.status);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
//
// loadJson("https://javascript.info/article/promise-chaining/user.json");
//
// note: solution
async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();

    console.log(json);
  } else {
    throw new Error(response.status);
  }
}
loadJson("https://javascript.info/article/promise-chaining/user.json").catch(
  console.log
);
