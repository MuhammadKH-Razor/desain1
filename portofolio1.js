const pivot = document.getElementById('bozz-pivot');
const portofolio = document.getElementById('welcome-portofolio');
const menuHide = document.getElementById('menu-hide');

document.getElementById('arrow-right').addEventListener('click', () => {
    pivot.classList.add('left-pivot');
})

document.getElementById('arrow-right2').addEventListener('click', () => {
    pivot.classList.add('left-pivot');
})

document.getElementById('arrow-right3').addEventListener('click', () => {
    pivot.classList.add('left-pivot');
})

document.getElementById('arrow-right4').addEventListener('click', () => {
    pivot.classList.add('left-pivot');
})

document.getElementById('arrow-right5').addEventListener('click', () => {
    pivot.classList.add('left-pivot');
})

document.getElementById('arrow-down').addEventListener('click', () => {
    pivot.classList.add('bottom-pivot');
})

document.getElementById('arrow-down2').addEventListener('click', () => {
    pivot.classList.add('bottom-pivot');
})

document.getElementById('arrow-down5').addEventListener('click', () => {
    pivot.classList.add('bottom-pivot3');
})

document.getElementById('arrow-down6').addEventListener('click', () => {
    pivot.classList.add('bottom-pivot3');
})

document.getElementById('arrow-down7').addEventListener('click', () => {
    pivot.classList.add('bottom-pivot4');
})

document.getElementById('arrow-down8').addEventListener('click', () => {
    pivot.classList.add('bottom-pivot4');
})

document.getElementById('arrow-left').addEventListener('click', () => {
    pivot.classList.remove('left-pivot');
})

document.getElementById('arrow-left2').addEventListener('click', () => {
    pivot.classList.remove('left-pivot');
})

document.getElementById('arrow-left3').addEventListener('click', () => {
    pivot.classList.remove('left-pivot');
})

document.getElementById('arrow-left4').addEventListener('click', () => {
    pivot.classList.remove('left-pivot');
})

document.getElementById('arrow-left5').addEventListener('click', () => {
    pivot.classList.remove('left-pivot');
})

document.getElementById('arrow-up2').addEventListener('click', () => {
    pivot.classList.remove('bottom-pivot');
})

document.getElementById('arrow-down3').addEventListener('click', () => {
    pivot.classList.add('bottom-pivot2');
})

document.getElementById('arrow-down4').addEventListener('click', () => {
    pivot.classList.add('bottom-pivot2');
})

document.getElementById('arrow-up').addEventListener('click', () => {
    pivot.classList.remove('bottom-pivot');
})

document.getElementById('arrow-up3').addEventListener('click', () => {
    pivot.classList.remove('bottom-pivot2');
})

document.getElementById('arrow-up4').addEventListener('click', () => {
    pivot.classList.remove('bottom-pivot2');
})

document.getElementById('arrow-up5').addEventListener('click', () => {
    pivot.classList.remove('bottom-pivot3');
})

document.getElementById('arrow-up6').addEventListener('click', () => {
    pivot.classList.remove('bottom-pivot3');
})

document.getElementById('arrow-up7').addEventListener('click', () => {
    pivot.classList.remove('bottom-pivot4');
})

document.getElementById('arrow-up8').addEventListener('click', () => {
    pivot.classList.remove('bottom-pivot4');
})

document.getElementById('bt-portofolios').addEventListener('click', () => {
    portofolio.classList.add('welcome-portofolio-hide');
})

document.getElementById('toggle-btn-web').addEventListener('click', () => {
    menuHide.classList.toggle('menu-hide-show');
})
