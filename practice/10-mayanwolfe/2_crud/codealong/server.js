const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://vader:ueoa@star-wars-quotes.djydzot.mongodb.net/?retryWrites=true&w=majority";

// const connectionString2 =
//   "mongodb+srv://yoda:ueoa@star-war-quotes.ewmevsi.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to DB");
    const db = client.db("star-wars-quotes");

    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(3000, function () {
      console.log("listening on 3000");
    });

    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/index.html");
    });

    app.post("/quotes", (req, res) => {
      console.log(req.body);
    });
  })
  .catch((err) => console.error(err));
