// 1. Promise.all
// // The Promise.all below settles after 3 seconds, and then its result is an array [1, 2, 3]:
// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
// ]).then(console.log);

// fetch an arrar of URL
let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];
// map every url to the promise of the fetch
let requests = urls.map((url) => fetch(url));
// Promise.all waits until all jobs are resolved
Promise.all(requests).then((responses) =>
  responses.forEach((response) =>
    console.log(`${response.url}: ${response.status}`)
  )
);
