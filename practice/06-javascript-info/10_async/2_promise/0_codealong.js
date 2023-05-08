// CODEALONG
// let promise = new Promise(function (resolve, reject) {
//   // executor (the producing code)
//   setTimeout(() => resolve("done"), 1000);
//   // setTimeout(() => reject(new Error("whoopsie daisy!!!")), 1000);
//   // resolve(console.log("done"));
//   // reject(new Error("..."));
// });
// promise
//   .finally(() => console.log("stop right here"))
//   .then(
//     (result) => console.log(`result: ${result}`) // 1st argument
//     // (error) => console.log(`error: ${error}`) // 2nd argument
//     // ); // something fishy happens here only when there's only one parameter for the 'then'
//   )
//   .catch((err) => console.log(`error: ${err}`));

// REWRITE THE loadScript function from the previous section
// CODE FROM THE PREVIOUS SECTION
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));
//   document.body.append(script);
// }
// loadScript("./script.js", (error, script) => (error ? `Error` : newFunction()));

function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () =>
      reject(new Error(`!!!!Script load error for ${src}`));

    document.body.append(script);
  });
}

let promise = loadScript("./script.js");

promise
  .then(() => newFunction())
  .catch((err) => console.log(`from inside catch ${err}`));
