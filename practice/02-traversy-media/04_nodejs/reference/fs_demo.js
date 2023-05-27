const fs = require("fs");
const path = require("path");

// // add/remove the directory based on the condition
// if (fs.existsSync(path.join(__dirname, "/test"))) {
//   fs.rmdir(path.join(__dirname, "test"), {}, (err) => {
//     if (err) throw err;
//     console.log("folder is successfully removed");
//   });
// } else {
//   fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//     if (err) throw err;
//     console.log("folder created");
//   });
// }

// write (to) files
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "file is being accessed\n",
//   (err) => {
//     if (err) throw err;
//     console.log("file written to...");

//     // append the file
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "file is being appended\n",
//       (err) => {
//         if (err) throw err;
//         console.log("file is appended");
//       }
//     );
//   }
// );

// Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "2_hello.txt"),
  (err) => {
    if (err) throw err;

    console.log("renamed successfully");
  }
);
