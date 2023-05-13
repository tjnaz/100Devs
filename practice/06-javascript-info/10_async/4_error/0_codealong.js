fetch("https://no-such-server.blable")
  .then((res) => res.json())
  .catch((err) => console.log(err));
