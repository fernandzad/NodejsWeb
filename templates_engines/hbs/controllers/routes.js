module.exports = function(app, parameters){

    app.get('/', (request, response) => {
        response.render('template', parameters);
    });

    parameters.personas.forEach((persona) => {
        app.get('/persona/' + persona.id, (request, response) => {
            response.render('persona', {
                titulo : 'Persona',
                nombre : persona.nombre
            });
        });
    });
};