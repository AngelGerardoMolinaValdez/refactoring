const {
    buscarVuelos, seleccionarAsientos, realizarReserva, ReservasVuelos
} = require('./example2');


test("validar búsqueda de vuelos", () => {
    expect(
        buscarVuelos("Foo", "Bar", "foobar")).toBe(
            new ReservasVuelos().buscarVuelos("Foo", "Bar", "foobar"));
});

test("validar selección de asientos", () => {
    expect(
        seleccionarAsientos("FooBar", "23")).toBe(
            new ReservasVuelos().seleccionarAsientos("FooBar", "23"));
});

test("validar reservas de vuelo", () => {
    expect(
        realizarReserva("foobar", "23", "FooBar")).toBe(
            new ReservasVuelos().realizarReserva("foobar", "23", "FooBar"));
});
