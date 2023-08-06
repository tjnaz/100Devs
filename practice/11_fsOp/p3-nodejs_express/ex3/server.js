const express = require("express");
const app = express();

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

const PORT = 3001;
app.listen(PORT);
console.log(`Server is running on PORT ${PORT}`);
