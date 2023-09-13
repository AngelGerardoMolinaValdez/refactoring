/*
Contexto: Estás trabajando en un sistema de reservas de vuelos. Tienes funciones que permiten a los usuarios buscar vuelos, seleccionar asientos y realizar reservas. Aplica "Combine Functions into Class" para organizar estas funciones relacionadas en una clase llamada ReservasVuelos.
*/
function buscarVuelos(origen, destino, fecha) {
    // Función para buscar vuelos disponibles
    return `buscando vuelos de ${origen} a ${destino} el dia ${fecha}`;
}

function seleccionarAsientos(vueloId, cantidadPasajeros) {
    // Función para seleccionar asientos en un vuelo
    return `Hay ${cantidadPasajeros} en el vuelo ${vueloId}`;
}

function realizarReserva(vueloId, asientosSeleccionados, pasajero) {
    // Función para realizar una reserva de vuelo
    return `El pasajero ${pasajero} tiene acceso a ${asientosSeleccionados} para su vuelo ${vueloId}`;
}

class ReservasVuelos {
    buscarVuelos(origen, destino, fecha) {
        // Función para buscar vuelos disponibles
        return `buscando vuelos de ${origen} a ${destino} el dia ${fecha}`;
    }
    
    seleccionarAsientos(vueloId, cantidadPasajeros) {
        // Función para seleccionar asientos en un vuelo
        return `Hay ${cantidadPasajeros} en el vuelo ${vueloId}`;
    }
    
    realizarReserva(vueloId, asientosSeleccionados, pasajero) {
        // Función para realizar una reserva de vuelo
        return `El pasajero ${pasajero} tiene acceso a ${asientosSeleccionados} para su vuelo ${vueloId}`;
    }
}

module.exports = {
    buscarVuelos, seleccionarAsientos, realizarReserva, ReservasVuelos}
