
const DomListaCertificados= document.querySelector(".ListaCertificados"); 

function agregarFuncionalidaCard(certificado){
    certificado.addEventListener("click", (e) => {        
        const ruta = certificado.getAttribute("data-url");
        window.open(ruta, "_blank");
    })

}



export async function cargarCertificados(cantidad){

    if(DomListaCertificados){
        const response= await fetch("./assets/js/datos/certificados.json")
        const data= await response.json(); 
        DomListaCertificados.innerHTML=""; 
        let domCardCertificado= document.createElement("div"); 
        domCardCertificado.classList.add("CardCertificado"); 
        
        if(!cantidad){
            cantidad=data.lista_Certificados.length 
        }

        const lista= data.lista_Certificados.slice(0,cantidad)        
        lista.forEach((e)=>{                      
                const nodeCard= domCardCertificado.cloneNode(false); 
                nodeCard.setAttribute("data-title", e.descripcion??" "); 
                nodeCard.setAttribute("data-url", e.url??""); 
                nodeCard.innerHTML=`<img src="${e.url}" alt="${e.alt}">`
                agregarFuncionalidaCard(nodeCard)
                DomListaCertificados.appendChild(nodeCard); 
            })

        //data-title="Certificado de PHP y My SQL" data-url="./assets/img/certificados/certificado-php.jpg">
        
    }
}
