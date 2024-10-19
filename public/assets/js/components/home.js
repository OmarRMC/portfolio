
    const text = "Web Developer";
    const typingElement = document.getElementById('developer-txt');
    typingElement.textContent=""; 
    

    let index = 0;

    function type() {
        if (index < text.length  && typingElement ) {
            typingElement.textContent += text[index];
            index++;
            //console.log(`Escribiendo: ${text[index - 1]}`); // Verifica el carácter actual
            setTimeout(type, 100); // Ajusta el tiempo en milisegundos para cambiar la velocidad de escritura
        }
    }

    type();
