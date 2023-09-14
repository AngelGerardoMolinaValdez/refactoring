const {calcularIVA, calculoIva} = require("./example1");

test("validar refactor de la función de calculo de iva", () => {
    expect(calcularIVA(100, 10)).toBe(calculoIva(100, 10));
});
