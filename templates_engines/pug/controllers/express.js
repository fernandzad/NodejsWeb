module.exports = function(app){

    let publicFunctions = {};
    publicFunctions.set = (engine, template_engine) => {
        app.set(engine, template_engine);
    };

    publicFunctions.listen = (port, message) => {
        app.listen(port, () => {
            console.log(message);
        });
    };

    return publicFunctions;
};


