// app imports node's built-in web server module
// const http = require("http");
const express = require("express");
const app = express();

// ACTIVATE JSON PARSER
// It runs for all HTTP methods (GET, PUT, DELETE, HEAD, POST)
// Whereas GET, PUT, DELETE, HEAD, AND POST methods get fired only for those requests
app.use(express.json()); // middleware

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

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(notes));
// });

app.get("/", (req, res) => {
  res.send("<h1>Hello backend bi!</h1>");
});

// FETCHING ALL THE RESOURCES
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// FETCHING A SINGLE RESOURCE
app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  // console.log(id);
  // const note = notes.find((note) => note.id === Number(id));
  const note = notes.find((note) => note.id === id);
  // console.log(note);
  if (note) {
    res.json(note);
  } else {
    res
      .status(404)
      .end(res.statusMessage = `The resource ${id} does not exist`);
  }
});

// DELETING RESOURCES
app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);
  res.status(204).end();
});

// RECEIVING DATA
app.post("/api/notes", (req, res) => {
  const body = req.body;
  if (!body.content) {
    // calling the return is crucial otherwise the code will execute to the very end
    return res.status(400).json({
      error: "content missing",
    });
  }
  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId(),
  };
  notes = notes.concat();
  res.json(note);
});

// ABOUT HTTP REQUEST TYPE
// Safety & idempotency

// MIDDLEWARE

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
