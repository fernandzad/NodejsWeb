//let nombres = ['Samantha', 'Adrián', 'Maria', 'Teresa'];
let tamanio = 0;
let fin = 0;
let inicio = 0, mitad = 0;

let BusquedaBinaria = (elemento, numeros) => {
    tamanio = numeros.length;
    fin = tamanio - 1;
    inicio = 0, mitad = 0;
    numeros.sort();

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