let promise = new Promise(function (resolve, reject) {
  // executor (the producing code)

  // setTimeout(() => resolve(console.log("done")), 1000);
  // setTimeout(() => reject(new Error(console.log("whoopsie daisy!!!"))), 1000);

  resolve(console.log("done"));
  // reject(new Error("..."));
});
