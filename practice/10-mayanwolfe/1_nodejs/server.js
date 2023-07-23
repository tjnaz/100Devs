const http = require("http");
const fs = require("fs");
const url = require("url");
const queryString = require("querystring");
const figlet = require("figlet");

http
  .createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8000);
