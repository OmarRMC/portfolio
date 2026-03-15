const ListaHabidadesDom = document.querySelector(".ListaHabidades");
ListaHabidadesDom.innerHTML = "";

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const cards = entry.target.querySelectorAll(".cardHabilidad");
        if (entry.isIntersecting) {
            cards.forEach((card, i) => {
                card.classList.remove("visible");
                setTimeout(() => card.classList.add("visible"), i * 50);
            });
        } else {
            cards.forEach(card => card.classList.remove("visible"));
        }
    });
}, { threshold: 0.1 });

async function cargarHabilidades() {
    const data = await fetch('./assets/js/datos/ListaHabidades.json');
    const json = await data.json();

    json.ListaHabidades.forEach(habilidad => {
        ListaHabidadesDom.innerHTML += `
        <div class="cardHabilidad" data-nivel="${habilidad.nivel}">
            <img alt="${habilidad.name}" src="${habilidad.url}">
            <span class="cardHabilidad__nombre">${habilidad.name}</span>
            <span class="cardHabilidad__tooltip cardHabilidad__tooltip--${habilidad.nivel.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}">${habilidad.nivel}</span>
        </div>
        `;
    });

    observer.observe(ListaHabidadesDom);
}

export { cargarHabilidades }
