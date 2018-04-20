const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const jwt = require("jsonwebtoken");
const jwtSecret = "nicknick";

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
});

router.post("/login", function(req, res) {
  knex('doctors')
  .where({'email': req.body.email, 'password': req.body.password})
  .then((doctor) => {
    doctor = doctor[0];
    if (!doctor) {
      res.sendStatus(400);
    }
    if (doctor.password === req.body.password) {
      delete doctor.password;
      res.json({doctor: doctor, token: jwt.sign({doctor}, jwtSecret)});
    } else {
      res.sendStatus(400);
    }
  })
})

router.post("/register", function(req, res) {
    knex('doctors').insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    }, "*")
    .then((doctor) => {
      doctor = doctor[0];
      delete doctor.password;
      res.json({doctor: doctor, token: jwt.sign({doctor}, jwtSecret)});
    })
})

router.get("/profile", function(req, res) {
  knex('testResults')
  .where('patient_id', data.data.patients.id)
  .then((testResult) => {
    res.json(testResult)
  })
})
module.exports = router;
