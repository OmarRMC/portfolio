const baras = document.querySelector(".baras")
const navar= document.querySelector(".navar")
const NavItems = document.querySelector(".NavItems")
baras.addEventListener("click", (e)=>{    
    baras.classList.toggle("animacionBar"); 
    NavItems.classList.toggle("showItemsNav"); 
    navar.classList.toggle("showItemsNav")
})