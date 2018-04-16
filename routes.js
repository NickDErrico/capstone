const express = require('express');
const router = express.Router();
const Doctors = require('./controllers/doctors')

router.get('/doctors', Doctors.getAll);

// router.get('/:id', function(req, res) {
// });
//
// router.post('/', function(req, res) {
// });
//
// router.patch('/:id', function(req, res) {
// });
//
// router.delete('/:id', function(req, res) {
// });

module.exports = router
