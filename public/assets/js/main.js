
import './components/flechaAriba.js'
const ruta=window.location.pathname; 
let proyectos; 
switch (ruta) {
  case "/":
  case "/index.html":
     await import("./components/home.js"); 
     await import('./components/nav.js'); 
     await import('./components/about.js');
     await import('./components/certificados.js');
    
     const habilidades =await import('./components/habilidades.js');
     habilidades["cargarHabilidades"]();       
     proyectos = await import('./components/proyectos.js');
     proyectos["CargarProyectosN"](3);      

    break;
  case "/proyectos.html":
    proyectos = await import('./components/proyectos.js');
    proyectos["CargarProyectos"](); 
    volverHome(); 
    break 
  case "/certificados.html": 
    import("./components/certificados.js").catch((error)=>{
      console.log(error)
    })
    volverHome(); 
  break  
  default:
    console.log("no se encontro la ruta");
    break;
}
if(false ){
  import("./components/proyectos.js")
  .then((modulo1) => {
    const CargarProyectos=modulo1["CargarProyectos"]
    CargarProyectos(); 
  })
  .catch((error) => {
    console.log(error); 
  });

  
}

function volverHome() {
  document.querySelector(".VolverAtras").addEventListener("click",()=>{
    //        history.back();
              window.location.pathname="/"
  })
}

