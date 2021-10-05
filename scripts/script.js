// JavaScript Document


// TESTEN OF JAVASCRIPT GOED IS GEKOPPELD AAN HTML
// 
console.log('halloooo');





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




// MUZIEK LATEN AFSPELEN
var muziek = document.querySelector('.muziekbestand');
var playbutton = document.querySelector('.playbutton');
var image = document.querySelector('.image');


function playpause() {
    console.log ('testaudio');
    if(muziek.paused) {
        muziek.play();
        image.src = '../fed/images/pause.svg';
    }else {
        muziek.pause();
        image.src = '../fed/images/play.svg';
    }
}

playbutton.addEventListener('click', playpause);






