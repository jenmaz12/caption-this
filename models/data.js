// /backend/data.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema({
  _id: Schema.Types.ObjectId,
  src: String,
  captions: [{ body: String, date: Date }],
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model('Data', DataSchema);
