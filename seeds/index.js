const Doctors = require('../models/doctors');
const Patients = require('../models/patients');

const doctors_seeds = require('./doctors');
const patients_seeds = require('./patients');

module.exports = () => {

  Doctors.find()
    .then(result => {
      if(result.length < 1) {
        for(let i = 0; i < doctors_seeds.length; i++) {
          new Doctor(doctors_seeds[i]).save()
        }
      }
    })

  Patients.find()
    .then(result => {
      if(result.length < 1) {
        for(let i = 0; i < patients_seeds.length; i++) {
          new Patient(patients_seeds[i]).save()
        }
      }
    })
}
