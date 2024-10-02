const toggleMode = document.getElementById("toggle-mode");
const sunIcon = toggleMode.querySelector(".fa-sun");
const moonIcon = toggleMode.querySelector(".fa-moon");

// Função para atualizar a exibição dos ícones
function updateIcons(isDarkMode) {
    sunIcon.style.display = isDarkMode ? "block" : "none";
    moonIcon.style.display = isDarkMode ? "none" : "block";
}

// Carrega o tema do localStorage ao iniciar a página
document.addEventListener("DOMContentLoaded", () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark-theme", isDarkMode);
    updateIcons(isDarkMode);
});

toggleMode.addEventListener("click", () => {
    const isDarkMode = !document.body.classList.toggle("dark-theme");
    localStorage.setItem("darkMode", !isDarkMode);
    updateIcons(!isDarkMode);
});

// Função para alternar o menu
function toggleMenu() {
    document.getElementById("menu-list").classList.toggle("active");
}

// Controle de slides
let currentSlide = 0;
const cards = document.querySelectorAll('.card');

// Função para mover o slide
function moveSlide(direction) {
    const totalSlides = cards.length;
    cards[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    cards[currentSlide].classList.add('active');
}