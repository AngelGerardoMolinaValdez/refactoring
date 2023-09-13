/*
Contexto: Estás desarrollando una aplicación de redes sociales y tienes funciones para publicar mensajes, gestionar amigos y buscar usuarios. Aplica "Combine Functions into Class" para agrupar estas funciones relacionadas en una clase llamada RedSocialApp.
*/
function publicarMensaje(usuario, mensaje) {
    // Función para publicar un mensaje en el perfil de un usuario
    return `${usuario} ha enviado el mensaje: ${mensaje}`
}

function gestionarAmigos(usuario, nuevoAmigo) {
    // Función para gestionar la lista de amigos de un usuario
    return `${usuario} ha agregado a ${nuevoAmigo} como amigo!`
}

function buscarUsuario(nombreUsuario) {
    // Función para buscar un usuario por nombre de usuario
    return `buscando a ${nombreUsuario}`
}

class RedSocialApp {
    publicarMensaje(usuario, mensaje) {
        // Función para publicar un mensaje en el perfil de un usuario
        return `${usuario} ha enviado el mensaje: ${mensaje}`
    }
    
    gestionarAmigos(usuario, nuevoAmigo) {
        // Función para gestionar la lista de amigos de un usuario
        return `${usuario} ha agregado a ${nuevoAmigo} como amigo!`
    }
    
    buscarUsuario(nombreUsuario) {
        // Función para buscar un usuario por nombre de usuario
        return `buscando a ${nombreUsuario}`
    }
}

module.exports = {
    publicarMensaje, gestionarAmigos, buscarUsuario, RedSocialApp}
