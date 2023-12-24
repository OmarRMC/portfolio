const cardAbout = document.querySelector(".cardAbout");
const callback =(entreis, observer)=>{
    entreis.forEach(entry=> {
        console.log(entry.intersectionRect.y )
        if(entry.isIntersecting && entry.intersectionRect.y>100){
            entry.target.classList.add("showStartAbout"); 
            setTimeout(()=>{
                entry.target.classList.remove("showStartAbout"); 
            },1000)
        }
        
    });
}

const opciones={
    root:null , 
    rootMargin: '0px', 
    threshold:0 
}

const observer=new IntersectionObserver(callback, opciones);

observer.observe(cardAbout); 