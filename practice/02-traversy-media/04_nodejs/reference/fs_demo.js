const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;

//   console.log("Folder created");
// });

// Delete a folder
// fs.rmdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err) throw err;

//   console.log("Folder is successfully removed");
// });

// Add/Remove the directory based on the condition
if (fs.existsSync(path.join(__dirname, "/test"))) {
  fs.rmdir(path.join(__dirname, "test"), {}, (err) => {
    if (err) throw err;
    console.log("Folder is successfully removed");
  });
} else {
  fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
    if (err) throw err;
    console.log("Folder created");
  });
}
