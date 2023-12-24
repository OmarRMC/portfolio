const VoverInicio=document.querySelector(".VoverInicio")
window.addEventListener("scroll",(e)=>{
    if(document.documentElement.scrollTop>500){
        VoverInicio.classList.add("MostrarFlecha")
    }else {
        VoverInicio.classList.remove("MostrarFlecha")
    }

})

VoverInicio.addEventListener("click", (e)=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
}); 