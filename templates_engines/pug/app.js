const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log('Aplicación levantada sobre el puerto 3000!');
});

let personas = require('./models/persona').personas;

let obj = {
    titulo : 'Pug',
    mensaje : 'Prueba',
    personas : personas 
};

require('./controllers/routes')(app, obj);