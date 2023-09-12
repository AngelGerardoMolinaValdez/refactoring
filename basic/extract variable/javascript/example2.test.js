const {calcularAreaCirculo, calcularAreaCirculoNuevo} = require("./example2");

test("funciones de calculo de area de un circulo", () => {
    expect(calcularAreaCirculo(12)).toBe(calcularAreaCirculoNuevo(12));
});