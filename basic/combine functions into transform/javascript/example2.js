/*
Contexto: Tienes una lista de números y deseas filtrar solo los números pares de la lista.
Actualmente, tienes una función que verifica si un número es par y otra función que aplica esta verificación a todos los números en la lista.
Debes combinar estas dos funciones en una sola función de transformación.
*/
// Función para verificar si un número es par
const esPar = (numero) => numero % 2 === 0;

// Función para filtrar los números pares en una lista
const filtrarNumerosPares = (listaNumeros) => {
  const numerosPares = listaNumeros.filter((numero) => esPar(numero));
  return numerosPares;
};

class Int {
    static pairsFrom(nums) {
        const pairs = nums.filter((num) => num % 2 == 0);
        return pairs;
    }
}

module.exports = {filtrarNumerosPares, Int};
