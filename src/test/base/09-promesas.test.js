import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../base/data/heroes';

describe('Heroes promises', () => {
    test('getHeroeByIdAsync must return a hero', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toEqual(heroes[0]);
            done();
        });
    });

    test('getHeroeByIdAsync must return an error msg if hero does not exists', (done) => {
        const id = 10;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
});