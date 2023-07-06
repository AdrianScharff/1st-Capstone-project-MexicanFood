// This is for the menu
const hamburger = document.querySelector('.hamburgerMenu');
const menu = document.querySelector('#menuOptions');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

const menuOptionsLinks = document.querySelectorAll('.menuOptionsLinks');
menuOptionsLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    })
});