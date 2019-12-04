
describe('Unit Test a Objeto Persona', () => {
    const obj_personas = require('../models/persona').personas;
    const tpersona = [{ id : 1, nombre : 'Adrian' }, {id : 2, nombre : 'Daniel'}, {id : 3, nombre : 'Elena'}];
    const tpersona2 = { id: 1, nombre : 'GuideLine'};

    test('Testearemos comparación de objetos idénticos', () => {
        expect(tpersona).toEqual(obj_personas);
    });

    test('Prueba Objeto contiene atributos', () => {
        expect(obj_personas[0]).toEqual(expect.objectContaining({
            id: expect.any(Number),
            nombre: expect.any(String)
          }));
    });
});

describe('Unit Test a Operaciones', () => {
    const obj_operaciones = require('../models/operaciones').aritmetica;
    
    test('Testearemos operación suma', () => {
        expect(obj_operaciones.sumar(5,10)).toBe(15);
    });

    test('Testearemos operación resta', () => {
        expect(obj_operaciones.restar(5,10)).toBe(5);
    });

    test('Testearemos operación multiplicación', () => {
        expect(obj_operaciones.multiplicar(5,10)).toBe(50);
    });

    test('Testearemos operación división', () => {
        expect(obj_operaciones.dividir(10,5)).toBe(2);
        expect(obj_operaciones.dividir(10,0)).toBe(10);
    });

    // test('Testearemos una función privada', () => {
    //     expect(obj_operaciones.validarNoCero(10)).toBe(true);
    // });
});

describe('UT a Algoritmos', () => {
    test('Búsqueda binaria: número encontrado', () => {
        const busquedaBinaria = require('../models/arreglos').BusquedaBinaria;
        expect(busquedaBinaria(3)).toBe(true);
    });
    test('Búsqueda binaria: número NO encontrado', () => {
        const busquedaBinaria = require('../models/arreglos').BusquedaBinaria;
        expect(busquedaBinaria(87)).toBe(false);
    });
});
