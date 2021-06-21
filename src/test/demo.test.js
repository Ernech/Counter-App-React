describe('Tests at demo.test.js', () => {
    test('Strings must be the same', () => {
        //1. Inicialización
        const msg = 'Hello World!';
        //2. Estímulo
        const msg1 = `Hello World!`;
        //3. Observar el comportamiento

        expect(msg).toBe(msg1);

    });
});