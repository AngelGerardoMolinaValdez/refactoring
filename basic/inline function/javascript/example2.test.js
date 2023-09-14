const {esNumeroPrimo, numeroEsPrimo} = require("./example2");

test("test función de validación de un numero primo ", () => {
    expect(esNumeroPrimo(5)).toBe(numeroEsPrimo(5));
});