const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://yoda:ueoa@star-war-quotes.ewmevsi.mongodb.net/test?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(
  connectionString,
  {
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) return console.log(err);
    console.log("Connected to DB");
  }
);

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.get("/", (req, res) => {
  // res.send("Hello world");
  res.sendFile(__dirname + "/index.html");
});

app.post("/quotes", (req, res) => {
  console.log(req.body);
});
