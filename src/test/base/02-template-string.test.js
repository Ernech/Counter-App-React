import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Tests at 02-template-string', () => {

    test('getSaludo must return Hola Ernesto', () => {
        const nombre = 'Ernesto';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe(`Hola ${nombre}!`)
    });

    test('Get saludo must return Hola Carlos! if there isn`t an argument', () => {
        const saludo = getSaludo();
        expect(saludo).toBe(`Hola Carlos!`)
    });
});