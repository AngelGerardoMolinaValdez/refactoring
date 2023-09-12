const calcularImpuestos = require("./example1");

test("validar impuestos personales", () => {
    impuestoTotal = calcularImpuestos(100, "personal");
    expect(impuestoTotal).toBe(30);
});

test("validar impuestos corporativos", () => {
    impuestoTotal = calcularImpuestos(100, "corporativo");
    expect(impuestoTotal).toBe(20);
});

test("validar impuestos capitales", () => {
    impuestoTotal = calcularImpuestos(100, "capital");
    expect(impuestoTotal).toBe(15);
});

test("validar impuestos que no existen", () => {
    expect(() => calcularImpuestos(100, "ninguno")).toThrow(Error);
});
