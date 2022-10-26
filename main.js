const menu = document.querySelector('.header nav ul');

function toggleMenu (menu) {
    menu.style.right = '';
    if(!menu.classList.value || menu.classList.value === 'hideMenu') {
        menu.classList.remove('hideMenu');
        menu.classList.add('showMenu');
    }
    else {
        menu.classList.remove('showMenu');
        menu.classList.add('hideMenu');
    }
}
document.querySelector('.header-menu_icon').onclick = () => toggleMenu(menu);

document.querySelector('.header-closeIcon').onclick = () => toggleMenu(menu);

document.querySelectorAll('.header nav ul li').forEach(el => el.onclick = () => {
    if(window.screen.width <= 500) {
        menu.classList.remove('hideMenu');
        menu.classList.remove('showMenu');
        menu.style.right = '-100%';
    }
});

arrowTop.onclick = () => window.scrollTo(scrollX, 0);

window.addEventListener('scroll', () => arrowTop.hidden = (scrollY < document.documentElement.clientHeight));