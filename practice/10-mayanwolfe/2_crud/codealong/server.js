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
    const quotesCollection = db.collection("quotes");

    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.use(bodyParser.json());

    app.get("/", (req, res) => {
      quotesCollection
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
          res.render("index.ejs", { quotes: results });
        })
        .catch((err) => console.error(err));
      // console.log(cursor);
      // res.sendFile(__dirname + "/index.html");
    });

    app.post("/quotes", (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          console.log(result);
          res.redirect("/");
        })
        .catch((error) => console.error(err));
    });

    app.listen(3000, function () {
      console.log("listening on 3000");
    });
  })
  .catch((err) => console.error(err));
