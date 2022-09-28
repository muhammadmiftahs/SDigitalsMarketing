const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY > 10){
        navbar.classList.replace('navbar-color', 'navbar-shadow');
    } else if (this.window.scrollY <= 10){
        navbar.classList.replace('navbar-shadow', 'navbar-color');
    }
});