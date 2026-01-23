const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.innerText = currentYear;
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/* 2. Función para cerrar el menú si haces clic FUERA de él */
window.onclick = function(event) {
    // Si el clic NO fue en el botón de contacto...
    if (!event.target.matches('.nav-btn') && !event.target.matches('.nav-btn i')) {
        
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        
        // Revisamos todos los menús desplegables y los cerramos
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}