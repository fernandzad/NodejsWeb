const express = require('express');
const app = express();

let personas = require('./models/persona').personas;
let obj = {
    titulo : 'HBS',
    mensaje : 'Motor de Plantillas hbs',
    personas : personas
};

let ex = require('./controllers/express')(app);
ex.set('view engine', 'hbs');
ex.listen(3000, 'App corriendo en puerto 3000!');

require('./controllers/routes')(app, obj);