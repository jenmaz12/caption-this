const express = require('express');
// const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const seeds = require('./scripts/seedDB');
// Don't need this here.
const routes = require('./routes');
const app = express();
const API_PORT = process.env.PORT || 80;

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger('dev'));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }
// append /api for our http requests
app.use(routes);

// connects our back end code with the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/captionthis', {
  // useCreateIndex: true,
  // useNewUrlParser: true,
});

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// launch our backend into a port
app.listen(API_PORT, function() {
  console.log(`🌎  ==> LISTENING ON PORT ${API_PORT}`);
});
