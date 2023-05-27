const http = require("http");

// Create server object
http
  .createServer((req, res) => {
    // Write response
    res.write("Heyooo");
    res.end();
  })
  .listen(5000, () => console.log("server seems to be running"));
