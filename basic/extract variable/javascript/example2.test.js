import assert from "assert";
import {calcularAreaCirculo, calcularAreaCirculoNuevo} from "./example2.js";

describe("Test a funciones de calculo de area de un circulo", () => {
    it("ambas funciones deben retornar el mismo valor", () => {
        assert.equal(calcularAreaCirculo(12), calcularAreaCirculoNuevo(12))
    })
});