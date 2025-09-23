const menuOverlay = document.querySelector('.menu-overlay');
const hamburger = document.querySelector('header i');
const mobileLinks = document.querySelectorAll('.mobile-nav-links li');
const title = document.querySelector('.title');

let menu = false;

mobileLinks.forEach(element => {
    element.addEventListener('click', () => {

        menuOverlay.style.top = '-100vh';
        hamburger.style.color = 'white';
        document.body.style.overflowY = 'auto';
        menu = false;
    })
});


hamburger.addEventListener('click', () => {
    if (!menu) {

        menuOverlay.style.top = '0';
        hamburger.style.color = 'black';
        title ? title.style.zIndex = '0' : '';
        document.body.style.overflowY = 'hidden';
        menu = true;
    } else {

        hamburger.style.color = 'white';
        title ? title.style.zIndex = '3' : '';
        menuOverlay.style.top = '-100vh';
        document.body.style.overflowY = 'auto';
        menu = false;
    }

})