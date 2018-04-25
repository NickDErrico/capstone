const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('results')
    .select("ranges.*", "patients.*", "results.*")
    .join('ranges', 'results.ranges_id', 'ranges.id')
    .join('patients', 'results.patient_id', 'patients.id')
    .where("results.doctor_id", 1)
    .orderBy('date', 'desc')
    .then(results => {
      res.json(results)
    })
});

router.get('/:id', function(req, res, next) {
  knex('results')
    .select()
    .join('ranges', 'results.ranges_id', 'ranges.id')
    .join('patients', 'results.patient_id', 'patients.id')
    .where(
      {
        "results.doctor_id": req.decoded.doctor.id,
        "results.patient_id": req.params.id
      }
    )
    .orderBy('date', 'desc')
    .then(results => res.json(results))
});

router.patch('/:id', function(req, res) {
  knex('results')
    .update(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(updatedResults => res.json(updatedResults))
});

router.delete('/:id', function(req, res) {
  knex('results')
    .del()
    .where('id', req.params.id)
    .then(removedResults => removedResults)
});

module.exports = router
