const Doctor = require('../models/doctors');

module.exports = {
  getAll
}

function getAll(req, res) {
  Doctor.find({ firstName: "Roger" }).then(doctors => res.send(doctors))
}
