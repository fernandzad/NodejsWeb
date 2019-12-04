var express = require('express');
var router = express.Router();
let people = require('../bin/persona').people;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    messsage: 'Express generator with hbs',
    people: people
  });
});

module.exports = router;
