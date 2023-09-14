const {convertirListaFahrenheitACelsius, Temperature} = require('./example1');

test("conversion de temperatura Celsius a Fahrenheit", () => {
    const temps = [199, 200, 60];
    expect(Temperature.transformTo("c", temps)).toEqual(
        [142.55555555555554, 143.11111111111111, 65.33333333333334]);
});

test("conversion de temperatura Fahrenheit a Celsius", () => {
    const temps = [199, 200, 60];
    expect(convertirListaFahrenheitACelsius(temps)).toEqual(
        Temperature.transformTo("f", temps));
});
