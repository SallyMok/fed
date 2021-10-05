console.log("hoi")

// H1 OP HOMEPAGINA LATEN VERANDEREN

// // //              0                       1                              2                            3
var tekst = ["Welcome to Hypland", "Hello weeb","Isn't it nice we love them same things?", "Spend all your money on merch!" ]

var h1Element = document.querySelector(".randomtekst");

randomGetal = Math.random()*4;

randomGetal = Math.floor(randomGetal);

h1Element.textContent = tekst[randomGetal];




// HAMBURGER MENU
// 

var menuIcon = document.querySelector('.hamburger-menu');

var navbar = document.querySelector(".navbar");


function veranderX() {
    navbar.classList.toggle('change');
}

menuIcon.addEventListener('click', veranderX);




// DARK LIGHT MODE
// 

var dark = document.querySelector('.darkmode');


function darkmode(){
    console.log ('testtest');
        
    document.body.classList.toggle('dark');
}

dark.addEventListener('click', darkmode);
