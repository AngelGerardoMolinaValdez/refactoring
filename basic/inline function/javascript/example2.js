/*
Contexto: Tienes una función llamada esNumeroPrimo que verifica si un número dado es primo o no. La función es un poco compleja y se considera innecesaria; por lo tanto, debe refactorizarse para eliminarla.
*/

function esNumeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
};

const numeroEsPrimo = (n) => {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

module.exports = {esNumeroPrimo, numeroEsPrimo};
