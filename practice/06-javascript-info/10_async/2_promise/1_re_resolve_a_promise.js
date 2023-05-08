// Re-resolve a promise?
// What’s the output of the code below?

let promise = new Promise((resolve, reject) => {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);
