/*
Contexto: Estás trabajando en un sistema de gestión financiera. Tienes una función llamada calcular_impuestos que toma un ingreso anual como argumento y calcula los impuestos a pagar. Actualmente, la función está diseñada solo para calcular impuestos sobre ingresos personales. Aplica "Change Function Declaration" para permitir que la función calcule impuestos sobre diferentes tipos de ingresos, como ingresos corporativos o ganancias de capital.
*/
function calcularImpuestos_(ingreso_anual) {
    // Calcular impuestos sobre ingresos personales aquí
    impuestos = ingreso_anual * 0.3
    return impuestos
}

const CantidadImpuestos = {
    personal: 0.3,
    corporativo: 0.2,
    capital: 0.15,
  }

function calcularImpuestos(ingresoAnual, tipoIngreso) {
    impuestoAplicado = CantidadImpuestos[tipoIngreso] ?? null
    if (!impuestoAplicado) {
        throw Error("no existe la unidad de medida")
    }
    return ingresoAnual * impuestoAplicado
}

module.exports = calcularImpuestos