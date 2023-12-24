const baras = document.querySelector(".baras")
const navar= document.querySelector(".navar")
const NavItems = document.querySelector(".NavItems")
baras.addEventListener("click", (e)=>{    
    baras.classList.toggle("animacionBar"); 
    NavItems.classList.toggle("showItemsNav"); 
    navar.classList.toggle("showItemsNav")
})

const li=NavItems.querySelectorAll("li"); 
 li.forEach(item =>{
    item.addEventListener('click', (e)=>{
        const nodo=document.getElementById(e.target.getAttribute("data-id"));
        nodo.scrollIntoView({behavior:"smooth"});  
        baras.classList.toggle("animacionBar"); 
        NavItems.classList.toggle("showItemsNav"); 
        navar.classList.toggle("showItemsNav")
    })
 })

 //document.getElementById("Proyectos").scrollIntoView({behavior:"smooth"})