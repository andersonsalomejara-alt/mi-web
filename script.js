const boton = document.getElementById('boton-tema');
function alternarModo() {
    document.body.classList.toggle('modo-oscuro');
    if (document.body.classList.contains('modo-oscuro')) {
        boton.innerText = "Desactivar Modo Oscuro";
    } else {
        boton.innerText = "Activar Modo Oscuro";
    }
}

boton.addEventListener('click', alternarModo);