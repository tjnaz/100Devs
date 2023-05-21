// "Promisification" is a long word for a simple transformation.
// It's the conversion of a function that accepts a callback into a function that
// returns a promise.
//
// Original function
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  //
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));
  //
  document.head.append(script);
}
// // usage:
// loadScript("./script.js", (error, script) => (error ? `Error` : newFunction()));

// // promisify v1.0
// let loadScriptPromise = function (src) {
//   return new Promise((resolve, reject) => {
//     loadScript(src, (err, script) => {
//       if (err) reject(err);
//       else resolve(script);
//     });
//   });
// };
// // usage:
// loadScriptPromise("./script.js").then(() => newFunction());

// // promisify v2.0 -> helper
// // A call to 'promisify(f)' returns a wrapper around 'f(*)'. That wrapper returns a promise
// // and forwards the call to the original 'f', tracking the result in the custom callback(**)
// // **--** Here, promisify assumes that the original function expects a **--**
// // **--** callback with exactly two arguments (err, result). **--**
// function promisify(f) {
//   return function (...args) {
//     // return a wrapper-function (*)
//     return new Promise((resolve, reject) => {
//       function callback(err, result) {
//         // our custom callback for f(**)
//         if (err) {
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       }
//       //
//       args.push(callback); // append our custom callback to the end of f arguments
//       //
//       f.call(this, ...args); // call the original function
//     });
//   };
// }
// // usage:
// let loadScriptPromise = promisify(loadScript);
// loadScriptPromise("./script.js").then(() => newFunction());

// promisify v3.0 -> advance
// But what if the original f expects a callback with more arguments callback(err, res1, res2, ...)?
// 'promisify(f, true)' to get array of results
function promisify(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) {
        // our custom callback for 'f'
        if (err) {
          reject(err);
        } else {
          // resolve with all callback results if manyArgs is spicified
          resolve(manyArgs ? results : results[0]);
        }
      }
      //
      args.push(callback);
      //
      f.call(this, ...args);
    });
  };
}
// usage:
let f = promisify(loadScript, true);
f("./script.js").then(() => newFunction());
