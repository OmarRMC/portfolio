
// Dominio de la Academy - única fuente de verdad. Cambiar aquí actualiza
// las tarjetas de cursos y el botón "Ir a OmarRMC Academy".
const ACADEMY_URL = "https://academy-soft.web.app";

const DomListaCursos = document.querySelector(".listaCursos");
const DomBtnAcademy = document.querySelector(".btnAcademy");

function crearCardCurso(curso) {
    const url = `${ACADEMY_URL}/cursos/${curso.slug}`;
    return `
      <a class="curso-card" href="${url}" target="_blank" rel="noopener noreferrer">
        <span class="curso-card__tag">${curso.sesiones} sesiones</span>
        <h3 class="curso-card__titulo">${curso.titulo}</h3>
        <p class="curso-card__desc">${curso.descripcion}</p>
        <small class="curso-card__tecs">${curso.tecnologias}</small>
        <span class="curso-card__cta">Ver curso <i class="fa-solid fa-arrow-right"></i></span>
      </a>`;
}

export async function cargarCursos(cantidad) {

    if (DomBtnAcademy) {
        DomBtnAcademy.setAttribute("href", ACADEMY_URL);
    }

    if (DomListaCursos) {
        const response = await fetch("./assets/js/datos/cursos.json");
        const data = await response.json();
        DomListaCursos.innerHTML = "";

        if (!cantidad) {
            cantidad = data.listaCursos.length;
        }

        const lista = data.listaCursos.slice(0, cantidad);
        lista.forEach((curso) => {
            DomListaCursos.insertAdjacentHTML("beforeend", crearCardCurso(curso));
        });
    }
}
