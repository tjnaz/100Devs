// // Segment 1
// // L1
// console.log("Synchronous 1");
// // L2
// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);
// // L3
// Promise.resolve().then((_) => console.log("Promise"));
// // L4
// console.log("Synchronous 4");

// // Segment 2
// const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");
// promise
//   .then((res) => res.json())
//   .then((user) => console.log("user_title", user.title))
//   .catch((err) => console.log("err", err));
// console.log("Synchronous");

// // Segment 3
// const tick = Date.now();
// const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}mn`);
// const codeBlocker = () => {
//   // let i = 0;
//   // while (i < 1000000) {
//   //   i++;
//   // }
//   // return "Billion loops done";
//   // return new Promise((resolve, reject) => {
//   //   let i = 0;
//   //   while (i < 1000000) {
//   //     i++;
//   //   }
//   //   resolve("Billion loops done");
//   // });
//   return Promise.resolve().then((v) => {
//     let i = 0;
//     while (i < 1000000) {
//       i++;
//     }
//     return "Billion loops done";
//   });
// };
// log("Synchronous 1");
// codeBlocker().then(log);
// log("Synchronous 2");

// Segment 4
// Basic
const getFruit = async (name) => {
  const fruits = {
    pineapple: "pa",
    peach: "pc",
    strawberry: "st",
  };
  // await delay(1000);
  return fruits[name];
};
getFruit("peach").then(console.log);
// Async + Await
const makeSmoothie = async () => {
  const a = await getFruit("pineapple");
  const b = await getFruit("strawberry");
  return [a, b];
};
makeSmoothie().then(console.log);
