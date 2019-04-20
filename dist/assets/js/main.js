// Select DOM elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Show menu
let showMenu = false

const toggleMenu = () => {
    if (!showMenu) {
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuBranding.classList.add('show')
        menuNav.classList.add('show')
        navItems.forEach(navItem => {
            navItem.classList.add('show')
        })
        showMenu = true;
    } else {
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuBranding.classList.remove('show')
        menuNav.classList.remove('show')
        navItems.forEach(navItem => {
            navItem.classList.add('show')
        })
        showMenu = false;
    }
}

menuBtn.addEventListener('click', toggleMenu);