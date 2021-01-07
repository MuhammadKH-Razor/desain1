const open = document.getElementById('open');
const btOpen = document.getElementById('bt-open');
const toggle = document.getElementById('toggle-btn');
const sertifs = document.getElementById('sertif');
const sertifLi = document.getElementById('sertif-li');
const sertifLi2 = document.getElementById('sertif-li2');
const users = document.getElementById('user');
const profile = document.getElementById('profile');
const toggle2 = document.getElementById('toggle-btn2');
const openMM = document.getElementById('mobile');
const MM = document.getElementById('menu-mobile');
const openMM3 = document.getElementById('mobile3');
const MM3 = document.getElementById('menu-mobile3');
const SW = document.getElementById('web');
const MW = document.getElementById('menu-web');

// window.addEventListener('scroll', () => {
//     const scrollTops = window.pageYOffset;
//     document.getElementById('scroll').innerHTML = scrollTops;
//     console.log(scrollTops)
// });

window.addEventListener('scroll', () => {
    const scrollTops = window.pageYOffset;
    
    if(window.pageYOffset >= 50) {
        document.getElementById('navs').classList.add('bg-light');
        document.getElementById('navs').classList.add('animate__fadeInDown');
        document.getElementById('brands-logo').classList.remove('text-white');
        document.getElementById('brands-logo').classList.add('text-dark');
        sertifLi.classList.remove('text-white')
        sertifLi2.classList.remove('text-white')
        users.classList.remove('text-white')
      } else if (window.pageYOffset < 50){
        document.getElementById('navs').classList.remove('bg-light');
        document.getElementById('navs').classList.remove('animate__fadeInDown');
        document.getElementById('brands-logo').classList.remove('text-dark');
        document.getElementById('brands-logo').classList.add('text-white');
        sertifLi.classList.add('text-white')
        sertifLi2.classList.add('text-white')
        users.classList.add('text-white')
      }

});


window.addEventListener('scroll', () => {
    const scrollTops = window.pageYOffset;
    
    if(window.pageYOffset >= 300) {
        document.getElementById('cd1').classList.add('animate__fadeInUp');
        document.getElementById('cd2').classList.add('animate__fadeInUp');
        document.getElementById('cd3').classList.add('animate__fadeInUp');
      } else if (window.pageYOffset < 300){
        document.getElementById('cd1').classList.remove('animate__fadeInUp');
        document.getElementById('cd2').classList.remove('animate__fadeInUp');
        document.getElementById('cd3').classList.remove('animate__fadeInUp');
      }
});

window.addEventListener('scroll', () => {
    const scrollTops = window.pageYOffset;
    
    if(window.pageYOffset >= 600) {
        document.getElementById('tap').classList.add('animate__fadeInUp');
        document.getElementById('tap').classList.remove('animate__fadeOutDown');
      } else if (window.pageYOffset < 600){
        document.getElementById('tap').classList.remove('animate__fadeInUp');
        document.getElementById('tap').classList.add('animate__fadeOutDown');
      }
});

window.addEventListener('scroll', () => {
    const scrollTops = window.pageYOffset;
    
    if(window.pageYOffset >= 2549) {
        document.getElementById('cdc1').classList.add('animate__fadeInUp');
        document.getElementById('cdc2').classList.add('animate__fadeInUp');
        document.getElementById('cdc3').classList.add('animate__fadeInUp');
      } else if (window.pageYOffset < 2340){
        document.getElementById('cdc1').classList.remove('animate__fadeInUp');
        document.getElementById('cdc2').classList.remove('animate__fadeInUp');
        document.getElementById('cdc3').classList.remove('animate__fadeInUp');
      }
});

window.addEventListener('scroll', () => {
    const scrollTops = window.pageYOffset;
    
    if(window.pageYOffset >= 1200) {
        document.getElementById('img-1').classList.add('animate__fadeInRight');
        document.getElementById('img-1').classList.remove('animate__fadeOutRight');
      } else if (window.pageYOffset < 1200){
        document.getElementById('img-1').classList.remove('animate__fadeInRight');
        document.getElementById('img-1').classList.add('animate__fadeOutRight');
      }
});

window.addEventListener('scroll', () => {
    const scrollTops = window.pageYOffset;
    
    if(window.pageYOffset >= 1750) {
        document.getElementById('img-2').classList.add('animate__fadeInRight');
        document.getElementById('img-2').classList.remove('animate__fadeOutRight');
      } else if (window.pageYOffset < 1750){
        document.getElementById('img-2').classList.remove('animate__fadeInRight');
        document.getElementById('img-2').classList.add('animate__fadeOutRight');
      }
});

window.addEventListener('scroll', () => {
    const scrollTops = window.pageYOffset;
    
    if(window.pageYOffset >= 2400) {
        document.getElementById('img-3').classList.add('animate__fadeInRight');
        document.getElementById('img-3').classList.remove('animate__fadeOutRight');
      } else if (window.pageYOffset < 2400){
        document.getElementById('img-3').classList.remove('animate__fadeInRight');
        document.getElementById('img-3').classList.add('animate__fadeOutRight');
      }
});

window.addEventListener('scroll', () => {
    const scrollTops = window.pageYOffset;
    
    if(window.pageYOffset >= 3000) {
        document.getElementById('list-service').classList.add('animate__fadeInUp');
        document.getElementById('list-service').classList.remove('animate__fadeOutDown');
      } else if (window.pageYOffset < 3000){
        document.getElementById('list-service').classList.remove('animate__fadeInUp');
        document.getElementById('list-service').classList.add('animate__fadeOutDown');
      }
});

window.addEventListener('scroll', () => {
    const scrollTops = window.pageYOffset;
    
    if(window.pageYOffset >= 3800) {
        document.getElementById('sec-3').classList.add('sec-3-show');
      } else if (window.pageYOffset < 3800){
        document.getElementById('sec-3').classList.remove('sec-3-show');
      }
});

sertifLi.addEventListener('click', () => {
    sertifs.classList.toggle('sertif-show');
    profile.classList.remove('profile-show');
  });
  
  users.addEventListener('click', () => {     
    profile.classList.toggle('profile-show');
    sertifs.classList.remove('sertif-show');
  });
    
toggle.addEventListener('click', () => {
    sertifs.classList.remove('sertif-show');
});
    
toggle2.addEventListener('click', () => {
    profile.classList.remove('profile-show');
});
    
openMM.addEventListener('click', () => {
    MM.classList.toggle('menu-mobile-show');
});

SW.addEventListener('click', () => {
MW.classList.toggle('menu-web-show');
});

openMM3.addEventListener('click', () => {
    MM3.classList.toggle('menu-mobile-show');
});

document.getElementById('brands-logo').addEventListener('click', () => {
  window.location.reload();
})
