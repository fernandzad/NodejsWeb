module.exports = function(app, obj){

    ///
    /// Main page
    ///
    app.get('/', (request, response) => {
        response.render('template', obj);
    });

    ///
    /// Personas pages
    ///
    let personas = obj.personas;
    personas.forEach((persona) => {
        app.get('/persona/' + persona.id, (request, response) => {
            response.render('persona', {
                titulo : 'Persona',
                nombre : persona.nombre
            });
        });
    });

};