const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cronService = require('./cron/cronJob');

// Run The Cron Jon
cronService.sendChangeAlert();


// Listening to port
server.listen(4000, () => {
  console.log('Server running on localhost:4000');
});


module.exports = app;