const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://yoda:ueoa@star-war-quotes.ewmevsi.mongodb.net/star-war-quotes?retryWrites=true&w=majority";

// const connectionString = process.env.MONGO_URI;

MongoClient.connect(connectionString, {
  useUnifiedTopology: true,
})
  .then((client) => {
    const db = client.db("star-war-quotes");
    const quotesCollection = db.collection("quotes");
    console.log("Connected to DB");

    app.use(bodyParser.urlencoded({ extended: true }));
    app.listen(3000, function () {
      console.log("listening on 3000");
    });

    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/index.html");
    });

    app.post("/quotes", (req, res) => {
      console.log(req.body);
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((err) => console.error(err));
