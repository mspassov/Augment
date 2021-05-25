const hamburgerMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

hamburgerMenu.addEventListener('click', () =>{
    hamburgerMenu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

