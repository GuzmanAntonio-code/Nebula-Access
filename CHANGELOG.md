
# Changelog

Todos los cambios importantes de Nebula Access
se documentan en este archivo.

## [1.0.0] - Version inicial

### Added
- Implementacion inicial de Nebula Access.
- Formulario de inicio de sesion.
- Estructura HTML, CSS y JavaScript.


## [2.0.0] - 2026-11-19

### Added
- Nueva pantalla de bienvenida para el sistema.
- Navegación entre la pantalla inicial y el formulario de autenticación.
- Botón para regresar a la pantalla principal.
- Limpieza automática de los campos al regresar al inicio.
- Identificación visible de la versión 2.0.0.

### Changed
- Se reorganizó la estructura HTML de la aplicación.
- Se separaron las funciones de navegación y validación.
- Se renovó la interfaz gráfica conservando la temática espacial.
- Se mejoró la presentación de los mensajes de autenticación.

### Removed
- Se eliminó el acceso directo al formulario como única pantalla de la aplicación.


## [2.1.0] - 2026-11-19

### Added
- Se incorpora una función para mostrar u ocultar la contraseña.
- Se agrega un botón interactivo en el campo de contraseña.
- Se añaden atributos de accesibilidad para identificar el estado del botón.

### Changed
- Se actualiza la versión de la aplicación a 2.1.0.
- Se adapta el diseño del campo de contraseña para integrar el nuevo control.


## [2.1.1] - 2026-11-20

### Fixed
- Se corrigió la validación del nombre de usuario cuando contiene espacios accidentales al principio o al final.
- Se implementó el método trim() para normalizar el identificador antes de compararlo con las credenciales registradas.

### Changed
- Se actualizó la versión de la aplicación a 2.1.1.


## [2.1.2] - 2026-11-20

### Fixed
- Se corrigió el comportamiento del formulario después de una autenticación exitosa.
- Se implementó la limpieza automática del usuario y la contraseña después de conceder el acceso.
- Se restableció automáticamente la visibilidad de la contraseña al finalizar una autenticación exitosa.

### Security
- Se redujo la exposición accidental de las credenciales en el formulario después de completar el inicio de sesión.

### Changed
- Se actualizó la versión de la aplicación a 2.1.2.
