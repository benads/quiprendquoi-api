const express = require('express');
const app = express();
const port = 3005;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const partyRoutes = require('./routes/party');
const mongoUrl = require('./mongo.js');

app.use(bodyParser());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use('/party', partyRoutes);

app.listen(port, () => console.log(`API app listening on port ${port}!`));