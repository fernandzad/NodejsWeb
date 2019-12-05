const express = require('express');
const app = express();

let ex = require('./controllers/express')(app);
let personas = require('./models/persona').personas;

ex.set('view engine', 'pug');
ex.listen(3000, 'Aplicación corriendo en el puerto 3000!');

let initial = {
    titulo : 'Pug',
    mensaje : 'Prueba',
    personas : personas 
};

require('./controllers/routes')(app, initial);
module.exports = app;