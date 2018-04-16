const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataRangeSchema = Schema([
  {
    glucose: {
      low: Number,
      high: Number,
      unit: String
    },
    creatinine: {
      low: Number,
      high: Number,
      unit: String
    },
    sodium: {
      low: Number,
      high: Number,
      unit: String
    },
    potassium: {
      low: Number,
      high: Number,
      unit: String
    },
    chloride: {
      low: Number,
      high: Number,
      unit: String
    },
    carbon_dioxide: {
      low: Number,
      high: Number,
      unit: String
    },
    calcium: {
      low: Number,
      high: Number,
      unit: String
    },
    protein: {
      low: Number,
      high: Number,
      unit: String
    },
    cholesterol: {
      low: Number,
      high: Number,
      unit: String
    },
    triglyerides: {
      low: Number,
      high: Number,
      unit: String
    },
  }
]);

module.exports = mongoose.model('Data Ranges', dataRangeSchema);
