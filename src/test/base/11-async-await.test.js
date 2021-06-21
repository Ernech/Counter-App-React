import { getImagen } from "../../base/11-async-await";
import '@testing-library/jest-dom';

describe('Test with async, await and fetch', () => {
    test('should return url image ', async() => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    });
});