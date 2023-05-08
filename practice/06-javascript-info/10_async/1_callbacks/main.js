function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(script);

  document.body.append(script);
}

loadScript("./script.js", function () {
  newFunction();
});
