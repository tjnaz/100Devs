const express = require("express");
const app = express();
const morgan = require("morgna");
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

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Phonebook?</h1>");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  const currentDate = new Date();
  res.send(
    `<h2> Phonebook has info for <u><i>${persons.length}</i></u> people</h2><h2>${currentDate}</h2>`
  );
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find((person) => person.id == id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  persons = persons.filter((person) => person.id != id);

  res.json(persons);
  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (persons.find((person) => person.name == body.name)) {
    return res.status(400).json({
      error: "duplicate name || names should be unique",
    });
  }

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "name or number is missing",
    });
  }

  let entry = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(entry);

  res.json(entry);
});

app.listen(PORT);
console.log(`Server is running on PORT ${PORT}`);
