
const phrases = ["Programador", "Desarrollador Full Stack", "Full-Stack Developer"];
const typingElement = document.getElementById('developer-txt');
typingElement.textContent = "";

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
    if (!typingElement) return;
    const current = phrases[phraseIndex];

    if (!deleting && charIndex <= current.length) {
        typingElement.textContent = current.slice(0, charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else if (!deleting) {
        deleting = true;
        setTimeout(type, 1500);
    } else if (charIndex > 0) {
        charIndex--;
        typingElement.textContent = current.slice(0, charIndex);
        setTimeout(type, 50);
    } else {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 300);
    }
}

type();
