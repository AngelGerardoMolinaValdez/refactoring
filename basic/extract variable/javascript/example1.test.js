import assert from "assert";
import {celsiusAFahrenheit, nuevoCelsiusAFahrenheit} from "./example1.js";
// import { describe } from "node:test";

describe("Test a funciones de conversion grados Celsius a Fahrenheit", () => {
    it("ambas funciones deben retornar el mismo valor", () => {
        assert.strictEqual(celsiusAFahrenheit(100), nuevoCelsiusAFahrenheit(100))
    })
});

