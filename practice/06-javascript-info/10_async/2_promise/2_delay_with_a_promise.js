// Delay with a promise
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
  // your code
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => resolve(), ms);
  // });
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(2000).then(() => alert("runs after 2 seconds"));
