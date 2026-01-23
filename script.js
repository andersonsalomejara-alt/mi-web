const yearSpan = document.getElementById('year');

function alternarModo() {
    document.body.classList.toggle('modo-oscuro');
    if (document.body.classList.contains('modo-oscuro')) {
        boton.innerText = "Desactivar Modo Oscuro";
    } else {
        boton.innerText = "Activar Modo Oscuro";
    }
}

boton.addEventListener('click', alternarModo);
yearSpan.innerText = new Date().getFullYear();