import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../base/data/heroes';

describe('Tests in heroes functions', () => {
    test('Must return an hero by id', () => {

        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find((heroe) => heroe.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Must return undefined if hero does not exist', () => {

        const id = 10;

        const heroe = getHeroeById(id);

        const heroeData = undefined;

        expect(heroe).toBe(heroeData);
    });

    test('Must retrun DC heroes', () => {

        const owner = 'DC';

        const heroesArr = getHeroesByOwner(owner);

        const heroesData = heroes.filter((heroe) => heroe.owner === owner);

        expect(heroesArr).toEqual(heroesData);
    });

    test('Must retrun marvel heores', () => {

        const owner = 'Marvel';

        const heroesArrLength = getHeroesByOwner(owner);

        const heroesDataLength = heroes.filter((heroe) => heroe.owner === owner);

        expect(heroesArrLength.length).toBe(heroesDataLength.length);
    });
});