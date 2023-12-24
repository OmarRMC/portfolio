const ListaHabidadesDom= document.querySelector(".ListaHabidades"); 
//import json from '../datos/ListaHabidades.json' assert {type:"json"}
ListaHabidadesDom.innerHTML=""; 
let json ; 
async function cargarHabilidades() {
    const data=await fetch('./assets/js/datos/ListaHabidades.json')
    if(data){        
        json = await data.json(); 
    }

    let  listaHabi = json.ListaHabidades; 
    
    listaHabi.forEach(habilidad =>{
        ListaHabidadesDom.innerHTML+=`
        <div class="cardHabilidad">
             <img alt="img-${habilidad.name}" src="${habilidad.url}">
             <div class="line">
                <div data-procentaje="${habilidad.porcentaje}" class="porcentage" style="background:${habilidad.color}"></div>
             </div>
        </div>
        `
    })
    addObserver(); 
}


const config={
     root:null , 
     rootMargin:'0px', 
     threshold:0.5
}

const callback= (entries , observer)=>{
    entries.forEach(entry =>{
        const nodo =entry.target ; 
        if(entry.isIntersecting){
             const porcentage=nodo.getAttribute('data-procentaje')
             nodo.style.width=porcentage+"%"
        }else {
            nodo.style.width="0%"
        }
    })
}


const observer = new IntersectionObserver(callback, config);

function addObserver() {
    const auxiDom=document.querySelectorAll(".porcentage"); 
    auxiDom.forEach(data =>{
        observer.observe(data); 
    }); 
}

export {cargarHabilidades, addObserver}