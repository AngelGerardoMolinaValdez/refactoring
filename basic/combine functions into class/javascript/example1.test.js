const {
    publicarMensaje, gestionarAmigos, buscarUsuario, RedSocialApp
} = require('./example1');


test("validar publicación de mensaje", () => {
    expect(
        publicarMensaje("Angel Molina", "Hola!")).toBe(
            new RedSocialApp().publicarMensaje("Angel Molina", "Hola!"));
});

test("validar gestión de amigos", () => {
    expect(
        gestionarAmigos("Angel Molina", "FooBar")).toBe(
            new RedSocialApp().gestionarAmigos("Angel Molina", "FooBar"));
});

test("validar búsqueda de usuario", () => {
    expect(
        buscarUsuario("FooBar")).toBe(
            new RedSocialApp().buscarUsuario("FooBar"));
});
