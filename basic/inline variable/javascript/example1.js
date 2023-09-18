/*
Contexto: Estás desarrollando una aplicación web que muestra el precio total de productos en un carrito de compras.
Tienes una variable intermedia llamada subtotal que almacena el resultado del cálculo del precio total.
*/
const calcularPrecioTotal_ = (precioUnitario, cantidad) => {
    const subtotal = precioUnitario * cantidad;  // Refactoriza esta variable intermedia
    return subtotal;
};

const calcularPrecioTotal = (precioUnitario, cantidad) => precioUnitario * cantidad;

module.exports = {calcularPrecioTotal_, calcularPrecioTotal};
