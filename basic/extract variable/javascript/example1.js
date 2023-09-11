/*
Contexto: Estás trabajando en una aplicación de conversión de unidades. Tienes una función que convierte grados Celsius a grados Fahrenheit. Actualmente, la fórmula de conversión se encuentra en línea en el código. Aplica "Extract Variable" para mejorar la legibilidad del código al asignar la fórmula de conversión a una variable con un nombre descriptivo.
*/

function celsiusAFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}

function nuevoCelsiusAFahrenheit(celsius) {
    const tamanioSobreCelsius = 9/5
    const puntoCongelacionAgua = 32
    let fahrenheit = (celsius * tamanioSobreCelsius)  + puntoCongelacionAgua
    return fahrenheit
}

export {celsiusAFahrenheit, nuevoCelsiusAFahrenheit};
