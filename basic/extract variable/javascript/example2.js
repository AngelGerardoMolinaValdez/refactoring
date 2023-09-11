/*
Contexto: Estás desarrollando una aplicación de geometría. Tienes una función que calcula el área de un círculo basado en su radio. La fórmula del área del círculo se encuentra directamente en el código. Aplica "Extract Variable" para mejorar la legibilidad del código al asignar la fórmula del área a una variable con un nombre descriptivo.
*/
function redondear(numero, totalDecimales) {
    return numero.toFixed(totalDecimales)
}

function calcularAreaCirculo(radio) {
    let area = 3.14159265359 * radio * radio
    return redondear(area, 4)
}

function calcularAreaCirculoNuevo(radio) {
    const PI = 3.14159265359
    let radio2 = radio * radio
    let area = PI * radio2
    return redondear(area, 4)
}

export {calcularAreaCirculo, calcularAreaCirculoNuevo};