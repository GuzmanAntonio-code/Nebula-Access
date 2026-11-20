const VERSION_APP = "2.1.1";

// Credenciales de prueba del sistema
const USUARIO_VALIDO = "Antonio23110009";
const CONTRASENA_VALIDA = "IngInv26";

// Elementos de las pantallas
const pantallaInicio = document.getElementById("pantallaInicio");
const pantallaLogin = document.getElementById("pantallaLogin");

// Elementos del formulario
const formulario = document.getElementById("loginForm");
const campoUsuario = document.getElementById("usuario");
const campoContrasena = document.getElementById("contrasena");
const mensaje = document.getElementById("mensaje");

// Botones de navegación
const btnAcceder = document.getElementById("btnAcceder");
const btnRegresar = document.getElementById("btnRegresar");

// Botón para mostrar u ocultar la contraseña
const btnMostrarContrasena = document.getElementById("btnMostrarContrasena");

// Muestra la pantalla de autenticación
function mostrarLogin() {
    pantallaInicio.hidden = true;
    pantallaLogin.hidden = false;

    campoUsuario.focus();
}

// Regresa a la pantalla de bienvenida
function mostrarInicio() {
    pantallaLogin.hidden = true;
    pantallaInicio.hidden = false;

    limpiarFormulario();
}

// Elimina los datos y mensajes del formulario
function limpiarFormulario() {
    formulario.reset();
    mensaje.textContent = "";
    mensaje.className = "";

    campoContrasena.type = "password";
    btnMostrarContrasena.textContent = "Mostrar";
    btnMostrarContrasena.setAttribute(
        "aria-label",
        "Mostrar contraseña"
    );
    btnMostrarContrasena.setAttribute("aria-pressed", "false");
}


// Comprueba las credenciales y elimina espacios
// accidentales al principio y al final del usuario.
function validarCredenciales(usuario, contrasena) {

    const usuarioLimpio = usuario.trim();

    return usuarioLimpio === USUARIO_VALIDO &&
           contrasena === CONTRASENA_VALIDA;
}


// Eventos de navegación
btnAcceder.addEventListener("click", mostrarLogin);
btnRegresar.addEventListener("click", mostrarInicio);

// Evento de envío del formulario
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const usuario = campoUsuario.value.trim();
    const contrasena = campoContrasena.value;

    const accesoPermitido = validarCredenciales(
        usuario,
        contrasena
    );

    if (accesoPermitido) {
        mensaje.textContent =
            "✦ Acceso concedido. ¡Bienvenido a bordo!";

        mensaje.className = "success";
    } else {
        mensaje.textContent =
            "✕ Credenciales incorrectas. Intenta nuevamente.";

        mensaje.className = "error";
    }
});

// Registra la versión actual en la consola
console.log("Nebula Access - Versión " + VERSION_APP);

// Alterna la visibilidad de la contraseña
btnMostrarContrasena.addEventListener("click", function() {

    const estaOculta = campoContrasena.type === "password";

    campoContrasena.type = estaOculta ? "text" : "password";

    btnMostrarContrasena.textContent = estaOculta
        ? "Ocultar"
        : "Mostrar";

    btnMostrarContrasena.setAttribute(
        "aria-label",
        estaOculta ? "Ocultar contraseña" : "Mostrar contraseña"
    );

    btnMostrarContrasena.setAttribute(
        "aria-pressed",
        String(estaOculta)
    );
});
