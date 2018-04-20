const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('patients')
    .select()
    .where("doctor_id", req.decoded.doctor.id)
    .orderBy('id', 'asc')
    .then(patients => res.json(patients))
});

router.get('/single/:id', function(req, res) {
  knex('patients')
    .select()
    .where('id', req.params.id)
    .then(patients => res.json(patients[0]))
});

router.patch('/:id', function(req, res) {
  knex('patients')
    .update(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(updatedPatient => res.json(updatedPatient))
});

router.delete('/:id', function(req, res) {
  knex('patients')
    .del()
    .where('id', req.params.id)
    .then(removedPatient => removedPatient)
});

module.exports = router
