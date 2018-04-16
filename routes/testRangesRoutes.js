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

// router.get('/:id', function(req, res) {
//   knex('parent_child_component')
//     .select('components.*')
//     .innerJoin('components', 'parent_child_component.child_id', 'components.id')
//     .where('parent_id', req.params.id)
//     .then(childComponents => {
//       let component = {
//           parentId: req.params.id,
//           childComponents
//       }
//       console.log('childComponents', childComponents)
//       res.json(component)
//     })
// });
//
// router.post('/', function(req, res) {
//   knex('components')
//     .insert(req.body, '*')
//     .then(newComponent => {
//       knex('parent_child_component')
//         .insert({
//           parent_id: req.body.parent_id,
//           child_id: newComponent.id
//         })
//         .then(() => res.send(newComponent))
//     })
// });

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
