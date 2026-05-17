const button = document.getElementById('exploreBtn');

button.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
});

const text ="Innovating Microbiology Testing";
const typingElement = document.querySelector('.typing-text');

let index = 0;

function typeText() {

    if(index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 80);
    }
}

typeText();
function openModal () {
    document.getElementById("reportModal").style.display = "block";
}
function closeModal () {
    document.getElementById("reportModal").style.display = "none";
}
function openOrderModal() {
    document.getElementById("orderModal").style.display = "block";
}
function closeOrderModal() {
    document.getElementById("orderModal").style.display = "none";
}