const mongoose = require("mongoose");
const db = require("../models/data");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/captionthis"
);

const captionSeed = [
  {
 
   
    src:  "http://test.com",
    captions: [{body:"Yes", date: new Date(Date.now())}]
  },
  {
   
    src:  "http://test.com",
    captions: [{body:"Yes", date: new Date(Date.now())}]
} 
];

db.Data
  .remove({})
  .then(() => db.Data.collection.insertMany(captionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  


