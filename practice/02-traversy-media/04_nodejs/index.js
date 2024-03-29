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
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }

  // if (req.url === "/about") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }

  // // api endpoint in json
  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "abc", age: 10 },
  //     { name: "xyz", age: 55 },
  //   ];
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  // Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  // // Filepath
  // console.log(filePath);

  // Extension of file
  let ext = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (ext) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, contentType);
      res.end(content, "utf8");
    }
  });

  console.log(req.url);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
