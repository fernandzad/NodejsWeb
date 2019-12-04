//let nombres = ['Samantha', 'Adrián', 'Maria', 'Teresa'];
let numeros = [6,3,1,88,4,9,11,17,2];
let tamanio = numeros.length;
let fin = tamanio - 1;
let inicio = 0, mitad = 0;
numeros.sort();

let BusquedaBinaria = (elemento) => {
    
    while(inicio <= fin){
        mitad = Math.floor( (inicio + fin) /2 );
        if(numeros[mitad] == elemento)
            return true;
        else if(elemento > numeros[mitad])
            inicio = mitad + 1;
            
        else if(elemento < numeros[mitad])
            fin = mitad - 1;
        
    }
    return false;
}

module.exports = {
    BusquedaBinaria
}