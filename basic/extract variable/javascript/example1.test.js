const {celsiusAFahrenheit, nuevoCelsiusAFahrenheit} = require("./example1");

test("funciones de conversion grados Celsius a Fahrenheit", () => {
    expect(celsiusAFahrenheit(100)).toBe(nuevoCelsiusAFahrenheit(100));
});
