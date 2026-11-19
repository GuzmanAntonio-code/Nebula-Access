const VERSION_APP = "2.0.0";

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
}

// Comprueba las credenciales ingresadas
function validarCredenciales(usuario, contrasena) {
    return usuario === USUARIO_VALIDO &&
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
