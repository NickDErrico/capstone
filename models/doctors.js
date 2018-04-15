const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = Schema({
  firstName: String,
  lastName: String,
  userName: String,
  password: String,
  patients: [{type: Schema.Types.ObjectId, ref: 'Patients'}]
});

module.exports = mongoose.model('Doctors', doctorSchema);
