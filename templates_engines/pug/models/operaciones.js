
let aritmetica = ( () => {
    let publicFunction = {};
    let privateFunction = {};

    publicFunction.sumar = (a,b) => {
        return a+b;
    };

    publicFunction.restar = (a,b) => {
        return Math.abs(a-b);
    };

    publicFunction.multiplicar = (a,b) => {
        return a * b;
    };

    publicFunction.dividir = (a,b) => {
        if(privateFunction.validarNoCero(b)){
            return a/b;
        }
        else
            return a/1;
    }

    privateFunction.validarNoCero = (numero) => {
        if(numero > 0)
            return true;
        else
            return false;
    }

    return publicFunction;

})();

module.exports = {
    aritmetica
};

