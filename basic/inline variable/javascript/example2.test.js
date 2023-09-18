const {calcularGastosMensuales_, calcularGastosMensuales
    } = require('./example2');

test("validar gastos mensuales", () => {
    expect(calcularGastosMensuales_(10, 10, 10)
        ).toBe(calcularGastosMensuales(10, 10, 10));
});
