let promise = new Promise(function (resolve, reject) {
  // executor (the producing code)

  // setTimeout(() => resolve("done"), 1000);
  setTimeout(() => reject(new Error("whoopsie daisy!!!")), 1000);

  // resolve(console.log("done"));
  // reject(new Error("..."));
});

promise
  .then(
    (result) => console.log(`result: ${result}`) // 1st argument
    // (error) => console.log(`error: ${error}`) // 2nd argument
    // ); // something fishy happens here only when there's only one parameter for the 'then'
  )
  .catch((err) => console.log(`error: ${err}`));
