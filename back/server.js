const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();
const port = 2020;
const db = require("./config/db");

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, { useUnifiedTopology: true }, (err, database) => {
  if (err) {
    return console.log(err);
  }

  const collections = database.db("clover");

  require("./routes")(app, collections);

  app.listen(port, () => {
    console.log("We are live on " + port);
  });
});
