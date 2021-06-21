import '@testing-library/jest-dom';

import { retornaArreglo } from "../../base/07-deses-arr";

describe('Deses tests', () => {
    test('Must return an string and a number', () => {
        const [strings, numbers] = retornaArreglo();
        // expect(arr).toEqual(
        //     ['ABC', 123]
        // )
        expect(strings).toBe('ABC');
        expect(typeof strings).toBe('string');

        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
    });
});