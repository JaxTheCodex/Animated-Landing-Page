var next = document.getElementById('next');
var prev = document.getElementById('prev');
var main = document.getElementById('carousel-box');
var banner=document.getElementById('bannerimg');
var logoImg=document.getElementById('title');
var thumbnail = document.getElementsByClassName('thumbnail');

var bgimg = new Array(
    "images/1323770.jpeg",
    "images/1292803.jpg",
    "images/1306942.jpeg",
    "images/1314280.jpeg",
    "images/1319317.jpeg"
);

var limg= new Array(
    "images/logo.png",
    "images/logo1.png",
    "images/logo2.png",
    "images/logo3.png",
    "images/logo4.png"
);

let i = 0;

next.onclick = ()=> {
    if(i<4){
        main.style.backgroundImage = 'url("'+bgimg[i+1]+'")';
        bannerimg.style.backgroundImage= 'url("'+bgimg[i+1]+'")';
        logoImg.style.backgroundImage='url("'+limg[i+1]+'")';
        thumbnail[i+1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i++;
    }
}

prev.onclick = ()=> {
    if(i>0){
        main.style.backgroundImage = 'url("'+bgimg[i-1]+'")';
        bannerimg.style.backgroundImage='url("'+bgimg[i-1]+'")';
        logoImg.style.backgroundImage='url("'+limg[i-1]+'")';
        thumbnail[i-1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i--;
    }
}

$(function() {
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});
