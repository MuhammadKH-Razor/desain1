const SW = document.getElementById('web');
const MW = document.getElementById('menu-web');
const MM2 = document.getElementById('menu-mobile');
const openMM2 = document.getElementById('mobile');

SW.addEventListener('click', () => {
    MW.classList.toggle('menu-web-show');
});
    
openMM2.addEventListener('click', () => {
    MM2.classList.toggle('menu-mobile-show');
});