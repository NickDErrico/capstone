const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = Schema({
  firstName: String,
  lastName: String,
  heightinInches: Number,
  weightInPounds: Number,
  eyeColor: String,
  hairColor: String,
  metaData: //???
});
