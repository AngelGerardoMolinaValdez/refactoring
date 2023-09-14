/*
Contexto: Tienes una función llamada calcularIVA que toma el monto de una factura y el porcentaje de impuesto sobre el valor agregado (IVA), y devuelve el monto total incluyendo el IVA. Esta función se considera innecesaria y debe refactorizarse para eliminarla.
*/
function calcularIVA(monto, porcentajeIVA) {
    var iva = monto * (porcentajeIVA / 100);
    var totalConIVA = monto + iva;
    return totalConIVA;
};

const calculoIva = (
    monto, porcentajeIVA) => monto + (monto * (porcentajeIVA / 100));

module.exports = {calcularIVA, calculoIva};