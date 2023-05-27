const url = require("url");

const myUrl = new URL(
  "https://mywebsite.com:8000/hello.html?id=100&status=active"
);

// // Serialized URL
// console.log(myUrl.href); // https://mywebsite.com:8000/hello.html?id=100&status=active
// console.log(myUrl.toString()); // https://mywebsite.com:8000/hello.html?id=100&status=active

// // Host (root domain)
// console.log(myUrl.host); // mywebsite.com:8000

// // Hostname (does not give the port#)
// console.log(myUrl.hostname); // mywebsite.com

// // Pathname
// console.log(myUrl.pathname);

// // Serialized query
// console.log(myUrl.search);

// // Search params
// console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append("abc", "123");
// console.log(myUrl.searchParams);

// Loop-through the params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
