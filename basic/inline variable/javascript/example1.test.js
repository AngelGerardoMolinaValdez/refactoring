const {calcularPrecioTotal_, calcularPrecioTotal} = require('./example1');

test("validar calculo del precio total de un producto", () => {
    expect(calcularPrecioTotal_(10, 2)).toBe(calcularPrecioTotal(10, 2));
});
