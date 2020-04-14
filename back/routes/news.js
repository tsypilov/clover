module.exports = function (app, db) {
  const ObjectID = require("mongodb").ObjectID;
  const newsCollection = db.collection("news");

  app.get("/news", (req, res) => {
    newsCollection.find().toArray((err, items) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(items);
      }
    });
  });

  app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };

    newsCollection.findOne(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(item);
      }
    });
  });

  app.post("/news", (req, res) => {
    const { title, description, link } = req.body;
    const note = { description, link, title };

    newsCollection.insertOne(note, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.delete("/news/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };

    newsCollection.deleteOne(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send("Note " + id + " deleted!");
      }
    });
  });

  app.put("/news/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };

    newsCollection.updateOne(details, note, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(note);
      }
    });
  });
};
