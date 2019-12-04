var express = require('express');
var router = express.Router();
let personas = require('../bin/persona').personas;

/* GET users listing. */
personas.forEach((persona) => {
  router.get('/persona/' + persona.id, function(req, res, next) {
    res.render('persona', {
      title: 'Persona',
      nombre : persona.nombre
    });
  });
});


module.exports = router;
