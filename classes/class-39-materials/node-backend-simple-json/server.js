const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  const redirect = (file, contentType) => {
    return fs.readFile(file, (err, data) => {
      res.writeHead(200, { "Content-Type": contentType });
      res.write(data);
      res.end();
    });
  };

  if (page == "/") {
    redirect("index.html", "text/html");
    // fs.readFile("index.html", function (err, data) {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
    //   res.end();
    // });
  } else if (page == "/otherpage") {
    redirect("otherpage.html", "text/html");
  } else if (page == "/otherotherpage") {
    redirect("otherotherpage", "text/html");
  } else if (page == "/api") {
    let coinFlip = Math.ceil(Math.random() * 2) == 1 ? "heads" : "tails";
    console.log(coinFlip);

    if ("student" in params) {
      let studentName = params["student"];

      if (studentName != "") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          name: studentName,
          status: `${studentName} is available`,
          currentOccupation: "Baller",
          coinFlipRes: coinFlip,
        };
        res.end(JSON.stringify(objToJson));
      } //student = leon
      else {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown",
        };
        res.end(JSON.stringify(objToJson));
      } //student != leon
    } //student if
  } //else if
  else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    figlet("404!!", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
