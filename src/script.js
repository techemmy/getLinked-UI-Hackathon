document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('#hamburgerMenu');
    const closeMenuBtn = document.querySelector('#closeMenu');
    
    document.querySelector('#toggleMenu').onclick = () => {
        hamburgerMenu.style.top = 0;
    }
    
    closeMenuBtn.onclick = () => {
        hamburgerMenu.style.top = '-100%';
    }
})
