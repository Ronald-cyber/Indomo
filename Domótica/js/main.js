const nav = document.getElementById('nav');
const burguer = document.getElementById('burguer');
const burguer_cerrar = document.getElementById('burguer_cerrar');

burguer.addEventListener("click", () =>{
    nav.classList.add('nav_visible');
})

burguer_cerrar.addEventListener("click", () =>{
    nav.classList.remove('nav_visible');
})



window.onload = function() {
    
    $('#onload').fadeOut('hidden');
    $('body').removeClass('hidden');    
}







