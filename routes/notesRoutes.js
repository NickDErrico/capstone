const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('notes')
    .select()
    .where("doctor_id", req.decoded.doctor.id)
    .orderBy('date', 'desc')
    .then(notes => {
      res.json(notes)
    })
});

router.get('/:id', function(req, res) {
  knex('notes')
    .select()
    .where('id', req.params.id)
    .then(notes => res.json(notes[0]))
});

router.patch('/:id', function(req, res) {
  knex('notes')
    .update(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(updatedNote => res.json(updatedNote))
});

router.delete('/:id', function(req, res) {
  knex('notes')
    .del()
    .where('id', req.params.id)
    .then(removedNote => removedNote)
});

module.exports = router
