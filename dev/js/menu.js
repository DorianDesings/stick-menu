const menu = document.getElementById('main-menu');
const menuHeight = menu.offsetTop;

addEventListener('scroll', ()=>{
    (pageYOffset>menuHeight) ? menu.classList.add('fixed'):menu.classList.remove('fixed')   
})