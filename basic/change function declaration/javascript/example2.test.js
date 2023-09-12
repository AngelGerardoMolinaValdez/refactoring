const conversionDeMedidas = require("./example2");

test("conversion metros a pulgadas", () => {
    let metrosAPulgadas = conversionDeMedidas(100, "metros", "pulgadas");
    expect(Math.round(metrosAPulgadas)).toBe(3937);
});

test("conversion pulgadas a pies", () => {
    let pulgadasAPies = conversionDeMedidas(100, "pulgadas", "pies");
    expect(pulgadasAPies).toBe(8.33333);
});

test("conversion pies a metros", () => {
    let piesAMetros = conversionDeMedidas(100, "pies", "metros");
    expect(piesAMetros).toBe(30.48);
});

test("conversion con datos erróneos", () => {
    expect(() => conversionDeMedidas(100, "escaleras", "metros")).toThrow(Error);
});
