
const text = "Full-Stack Developer";
const typingElement = document.getElementById('developer-txt');
typingElement.textContent = "";


let index = 0;

function type() {
    if (index < text.length && typingElement) {
        typingElement.textContent += text[index];
        index++;
        setTimeout(type, 100); 
    }
}

type();
