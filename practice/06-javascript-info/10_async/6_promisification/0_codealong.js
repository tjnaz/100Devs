// "Promisification" is a long word for a simple transformation.
// It's the conversion of a function that accepts a callback into a function that
// returns a promise.
//
// Original function
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   //
//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));
//   //
//   document.head.append(script);
// }
// loadScript("./script.js", (error, script) => (error ? `Error` : newFunction()));
