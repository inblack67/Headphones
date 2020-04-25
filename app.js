window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 100){
        navbar.style.background = '#F8C471';
    }
    else {
        navbar.style.background = '';
    }
});


const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 700
});