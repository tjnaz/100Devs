const express = require("express");
const app = express();
const PORT = 3001;

let persons = [
  {
    id: 1,
    name: "Arto Hellos",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Don Abarov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Phonebook?</h1>");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  const currentDate = new Date();
  res.send(`<h2>`);
});

app.listen(PORT);
console.log(`Server is running on PORT ${PORT}`);
