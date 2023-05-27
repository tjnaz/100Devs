const path = require("path");

// Base file name
console.log(path.basename(__filename)); // path_demo.js

// Directory name
console.log(path.dirname(__filename)); // /home/az/personal/training/100Devs/practice/02-traversy-media/04_nodejs/reference

// File extension
console.log(path.extname(__filename)); // .js

// Create path object
console.log(path.parse(__filename).base); // path_demo.js

// Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
