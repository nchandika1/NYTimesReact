const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Articles collection to start clean when run

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/articlesDB",
  {
    useMongoClient: true
  }
);

db.Article
  .remove({})
  .then(data => {
    console.log("Start with empty Articles DB!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
