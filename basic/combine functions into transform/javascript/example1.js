/*
Contexto: Tienes una lista de temperaturas en grados Fahrenheit y debes convertirlas a grados Celsius.
Actualmente, tienes una función que realiza la conversión de una sola temperatura de Fahrenheit a Celsius y otra función que aplica esta conversión a todas las temperaturas en la lista.
Debes combinar estas dos funciones en una sola función de transformación.
*/
// Función para convertir una temperatura de Fahrenheit a Celsius
const convertirFahrenheitACelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  };

  // Función para convertir una lista de temperaturas de Fahrenheit a Celsius
  const convertirListaFahrenheitACelsius = (tempFahrenheit) => {
    const tempCelsius = tempFahrenheit.map((temperatura) => convertirFahrenheitACelsius(temperatura));
    return tempCelsius;
  };

class Temperature {
    static transformTo(type, temps) {
        const tempsConverted = temps.map((temp) => {
            if (type === "f") {
                return this.#fahrenheitToCelsius(temp)
            } else {
                return this.#celsiusToFahrenheit(temp)
            }
        });
        return tempsConverted;
    }

    static #celsiusToFahrenheit(t) {
        const fahrenheit = (t * 5 / 9) + 32;
        return fahrenheit;
    }

    static #fahrenheitToCelsius(t) {
        const celsius = (t - 32) * 5 / 9;
        return celsius;
    }
}

module.exports = {convertirListaFahrenheitACelsius, Temperature};
