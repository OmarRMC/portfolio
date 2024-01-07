//import json from '../datos/proyectos.json' assert {type:"json"}
const listaProyectosDom = document.querySelector(".listaProyectos"); 
listaProyectosDom.innerHTML=""; 
let  json

let auxiElemento; 

async function CargarProyectos() {
    const data=await fetch('./assets/js/datos/proyectos.json')
    if(data){        
        json = await data.json(); 
    }
    const listaProyectos=json.listaProyectos; 
    
    listaProyectos.forEach(proyecto=>{
      
      auxiElemento=document.createElement('div'); 
      auxiElemento.classList.add("contenedorCard"); 
      auxiElemento.innerHTML=`
      <div class="cardProyecto">
        <a href="${proyecto.url_web??'#'}" target="_blank">
          <span class="openProyect">
              <i class="fa-solid fa-up-right-from-square" ></i>                    
          </span>
        </a>
          <span class="openGit">
              <i class="fa-brands fa-github" aria-hidden="true"></i>
          </span>
        <figure class="imgCard">
            <img src="${proyecto.image}" alt="Ordenamiento - Metodo burbuja">
            <span class="tituloProyecto">${proyecto.titulo}</span>
        </figure>
        <main class="mainCard">             
           <p class="descripcion">${proyecto.Descripcion}</p>
        </main>
        <footer class="foorderCard">
            ${
                CargarStack(proyecto.stack)
            }
        </footer>
      </div>

      `
      observer.observe(auxiElemento); 
      listaProyectosDom.appendChild(auxiElemento); 
    }); 
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



export {CargarProyectos}; 

