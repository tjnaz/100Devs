function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.body.append(script);
}

loadScript("./script.js", (error, script) => (error ? `Error` : newFunction()));
