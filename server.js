const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');

const index = require('./routes/indexRoutes');
const doctors = require('./routes/doctorsRoutes');
const patients = require('./routes/patientsRoutes');
const testRanges = require('./routes/testRangesRoutes');
const testResults = require('./routes/testResultsRoutes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/doctors', doctors);
app.use('/patients', patients);
app.use('/testRanges', testRanges);
app.use('/testResults', testResults);

app.listen(port, function() {
  console.log("listening on port: ", port);
})
