//This file sends the HTML file to the client
//and acts as a gatekeeper for the routes

const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api/images');

// API Routes
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
);

module.exports = router;
