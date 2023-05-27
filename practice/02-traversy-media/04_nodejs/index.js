// // 1. Basic import/export
// // import Person from "./person"; // es6
// const person = require("./person"); // common js
// console.log(person.name);

// // 2. using class
// const Person = require("./person"); // common js
// const person1 = new Person("john doe", 30);
// console.log(person1.greeting());

// // 3. Logger
// // 4. Write(append) the messages to a file
// const Logger = require("./logger");
// const File = require("./writeToFile.js");
// const logger = new Logger();
// const file = new File();
// logger.on("message", (data) => {
//   console.log(`Message info`, data.id, `:`, data.msg);
//   file.write(data.id, data.msg);
// });
// logger.log("yo yo yo");

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }

  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
  console.log(req.url);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
