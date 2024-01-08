const certificaciones = document.querySelectorAll(".CardCertificado");
certificaciones.forEach(certificado => {
    certificado.addEventListener("click", (e) => {        
        const ruta = certificado.getAttribute("data-url");
        window.open(ruta, "_blank");
    })
})
console.log("Hola")