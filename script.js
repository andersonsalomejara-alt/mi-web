// script.js

// 1. Seleccionamos el botón por su ID (como un puntero al objeto)
const boton = document.getElementById('boton-tema');

// 2. Definimos la función
function alternarModo() {
    document.body.classList.toggle('modo-oscuro');
    
    // Lógica extra: Cambiar el texto del botón según el estado
    if (document.body.classList.contains('modo-oscuro')) {
        boton.innerText = "Desactivar Modo Oscuro";
    } else {
        boton.innerText = "Activar Modo Oscuro";
    }
}

// 3. Añadimos el "Event Listener"
// Cuando el 'boton' reciba un 'click', ejecuta 'alternarModo'
boton.addEventListener('click', alternarModo);
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.innerText = currentYear;