document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#header button');
    const nav = document.querySelector('#header .nav');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuButton.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuButton.textContent = '☰';
        });
    });
});