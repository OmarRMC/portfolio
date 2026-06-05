//import json from '../datos/proyectos.json' assert {type:"json"}
const listaProyectosDom = document.querySelector(".listaProyectos"); 
listaProyectosDom.innerHTML=""; 
let  json

let auxiElemento; 

function crearCardProyecto(proyecto) {
    const linkWeb = proyecto.url_web
        ? `<a href="${proyecto.url_web}" target="_blank">
          <span class="openProyect">
              <i class="fa-solid fa-up-right-from-square" ></i>
          </span>
        </a>`
        : "";
    const linkGit = proyecto.url_github
        ? `<a href="${proyecto.url_github}" target="_blank">
          <span class="openGit">
              <i class="fa-brands fa-github" aria-hidden="true"></i>
          </span>
        </a>`
        : "";

    return `
      <div class="cardProyecto">
        ${linkWeb}
        ${linkGit}
        <figure class="imgCard">
            <img src="${proyecto.image}" alt="${proyecto.titulo}">
            <span class="tituloProyecto">${proyecto.titulo}</span>
        </figure>
     <div style="position: relative;">
        <div class="capa"></div>
        <main class="mainCard">
           <p class="descripcion">${proyecto.Descripcion}</p>
        </main>
        <footer class="foorderCard">
            ${
                CargarStack(proyecto.stack)
            }
        </footer>
        </div>
      </div>

      `;
}

function agregarCard(proyecto) {
    auxiElemento = document.createElement('div');
    auxiElemento.classList.add("contenedorCard");
    auxiElemento.innerHTML = crearCardProyecto(proyecto);
    observer.observe(auxiElemento);
    listaProyectosDom.appendChild(auxiElemento);
}

async function CargarProyectos() {
    const data=await fetch('./assets/js/datos/proyectos.json')
    if(data){
        json = await data.json();
    }
    const listaProyectos=json.listaProyectos;

    listaProyectos.forEach(proyecto=>{
      agregarCard(proyecto);
    });
}

async function CargarProyectosN(n)  {

    const data=await fetch('./assets/js/datos/proyectos.json')
    if(data){
        json = await data.json();
    }
    const listaProyectos=json.listaProyectos;


    for (let position = 0; position < listaProyectos.length && position<n; position++) {
      agregarCard(listaProyectos[position]);
    }

}

function CargarStack(Stacks) {
    let StackDom =""
    Stacks.forEach(lenguaje=>{
      StackDom+=`
      <figure class="img_tecnologia">
           <img src="${lenguaje.url}" alt="${lenguaje.name}"/>
      </figure>`
    })
    return StackDom; 
}



const callback= (entries, observer)=>{
    entries.forEach(entry => {
        
        if(entry.isIntersecting){

                entry.target.classList.add("startShowCard"); 
            
        }else {
            entry.target.classList.remove("startShowCard"); 
        }
    });
}

const observer= new IntersectionObserver(callback, {root:null , rootMargin:'0px', threshold:0.3})

export {CargarProyectos, CargarProyectosN}; 

