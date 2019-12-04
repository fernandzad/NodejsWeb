var express = require('express');
var router = express.Router();
let personas = require('../bin/persona').personas;

router.get('/', function(req, res, next) {
  res.render('index', { 
      title: 'Home', 
      message: 'Bienvenido al sistema',
      people: personas
    });
});

module.exports = router;
