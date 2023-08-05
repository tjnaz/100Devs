// app imports node's built-in web server module
// const http = require("http");
const express = require("express");
const app = express();

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "browser can execute only js",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(notes));
// });

app.get("/", (req, res) => {
  res.send("<h1>Hello backend bi!</h1>");
});

app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  // console.log(id);

  // const note = notes.find((note) => note.id === Number(id));
  const note = notes.find((note) => note.id === id);

  // const note2 = notes.find((note) => {
  //   console.log(
  //     note.id,
  //     typeof note.id,
  //     id,
  //     typeof Number(id),
  //     note.id === Number(id)
  //   );
  // });

  // console.log(note);
  res.json(note);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
