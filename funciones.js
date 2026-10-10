
/* ==============================
   NAVEGACIÓN DE ECLIPSE
================================= */

const enlaces = document.querySelectorAll(".menu a");

const secciones = document.querySelectorAll(
    "main section[id]"
);

// Resaltar el enlace seleccionado al hacer clic
enlaces.forEach(function(enlace) {

    enlace.addEventListener("click", function() {

        enlaces.forEach(function(item) {
            item.classList.remove("activo");
        });

        enlace.classList.add("activo");
    });

});

// Detectar la sección visible durante el desplazamiento
function actualizarMenu() {

    let seccionActual = "inicio";

    secciones.forEach(function(seccion) {

        const posicion = seccion.getBoundingClientRect();

        if (posicion.top <= 180 && posicion.bottom > 180) {
            seccionActual = seccion.id;
        }

    });

    enlaces.forEach(function(enlace) {

        enlace.classList.remove("activo");

        if (enlace.getAttribute("href") === "#" + seccionActual) {
            enlace.classList.add("activo");
        }

    });

}

// Actualizar el menú al desplazarse
window.addEventListener("scroll", actualizarMenu);

// Establecer el enlace correcto al cargar la página
window.addEventListener("load", actualizarMenu);
