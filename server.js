const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

//connect to db here

require('./seeds')()

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes'));

//require specific routes here

app.listen(port, function() {
  console.log('listening on port: ', port);
})
