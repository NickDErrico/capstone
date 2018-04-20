const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('testResults')
    .select()
    .orderBy('id', 'asc')
    .then(testResults => res.json(testResults))
});

router.get('/single/:id', function(req, res) {
  knex('testResults')
    .select()
    .where('id', req.params.id)
    .then(testResults => res.json(testResults[0]))
});

router.patch('/:id', function(req, res) {
  knex('testResults')
    .update(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(updatedTestResults => res.json(updatedTestResults))
});

router.delete('/:id', function(req, res) {
  knex('testResults')
    .del()
    .where('id', req.params.id)
    .then(removedTestResults => removedTestResults)
});

module.exports = router
