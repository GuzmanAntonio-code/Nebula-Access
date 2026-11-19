const USUARIO_VALIDO = "Antonio23110009";
const CONTRASENA_VALIDA = "IngInv26";

function validarCredenciales(usuario, contrasena) {
    return usuario === USUARIO_VALIDO && contrasena === CONTRASENA_VALIDA;
}

const formulario = document.getElementById("loginForm");
const campoUsuario = document.getElementById("usuario");
const campoContrasena = document.getElementById("contrasena");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const accesoPermitido = validarCredenciales(campoUsuario.value, campoContrasena.value);
    mensaje.textContent = accesoPermitido
        ? "✦ Acceso concedido. ¡Bienvenido a bordo!"
        : "✕ Credenciales incorrectas";
    mensaje.style.color = accesoPermitido ? "#89e7c1" : "#ff9fae";
});
