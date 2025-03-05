// Smooth scroll and active section
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// Scroll spy
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

const themeButton = document.getElementById('colorBtn');
const themeIcon = themeButton.querySelector('.theme-icon');
const themeText = themeButton.querySelector('.theme-text');
let isDark = false;

themeButton.addEventListener('click', () => {
    isDark = !isDark;
    document.body.classList.toggle('dark-theme');
    
    // Обновление иконки и текста
    themeIcon.innerHTML = isDark ? '&#127774;' : '&#127769;'; // Солнце / Луна
    themeText.textContent = isDark ? 'Light Theme' : 'Dark Theme';
    
    // Анимация кнопки
    themeButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        themeButton.style.transform = 'scale(1)';
    }, 100);
});