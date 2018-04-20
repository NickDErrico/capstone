const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('testRanges')
    .select()
    .orderBy('id', 'asc')
    .then(testRanges => res.send(testRanges))
});

router.get('/single/:id', function(req, res) {
  knex('testRanges')
    .select()
    .where('id', req.params.id)
    .then(testRanges => res.json(testRanges[0]))
});

router.patch('/:id', function(req, res) {
  knex('testRanges')
    .update(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(updatedtestRange => res.json(updatedtestRange))
});

router.delete('/:id', function(req, res) {
  knex('components')
    .del()
    .where('id', req.params.id)
    .then(removedTestRange => removedTestRange)
});

module.exports = router
