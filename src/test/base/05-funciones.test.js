import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Tests at 05-funciones', () => {

    test('getUser Must return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    });


    test('getUserActvie must return an object', () => {
        const nombre = 'Ernech';
        const userTest = {
            uid: 'ABC567',
            username: nombre
        };
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);
    });

});