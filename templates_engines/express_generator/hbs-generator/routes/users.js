var express = require('express');
var router = express.Router();
let people = require('../bin/persona').people;

people.forEach((person) => {
  router.get('/persona/' + person.id, function(req, res, next) {
    res.render('persona', {
      nombre: person.nombre
    });
  });
});
/* GET users listing. */


module.exports = router;
