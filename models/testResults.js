const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testResultSchema = Schema({
  date: String,
  glucose: Number,
  creatinine: Number,
  sodium: Number,
  potassium: Number,
  chloride: Number,
  carbon_dioxide: Number,
  calcium: Number,
  protein: Number,
  cholesterol: Number,
  triglyerides:Number
});

module.exports = mongoose.model('Test Results', testResultSchema);
