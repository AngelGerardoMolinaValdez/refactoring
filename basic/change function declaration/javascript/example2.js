/*
Contexto: Estás desarrollando una aplicación de conversión de unidades de medida. Tienes una función llamada convertir_pies_a_metros que recibe una longitud en pies y realiza la conversión a metros. Actualmente, la función solo maneja la conversión de pies a metros. Aplica "Change Function Declaration" para permitir que la función convierta entre diferentes unidades de medida, como pies a metros, pulgadas a centímetros, etc.
*/

function convertir_pies_a_metros(pies) {
    // Realizar la conversión de pies a metros aquí
    metros = pies * 0.3048
    return metros
}

const unidadesDeMedida = {
    metros: {
        pulgadas: 39.37,
        pies: 3.281
    },

    pulgadas: {
        metros: 0.0254,
        pies: 0.0833333
    },

    pies: {
        metros: 0.3048,
        pulgadas: 12
    }
}

function conversionDeMedidas(cantidad, tipoEntrada, tipoSalida) {
    unidadMedidaSalida = unidadesDeMedida[tipoEntrada][tipoSalida] ?? null
    if (!unidadMedidaSalida) {
        throw Error("no existe la unidad de medida")
    }
    return cantidad * unidadMedidaSalida
}

module.exports = conversionDeMedidas
