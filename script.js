const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 180);
    // header.style.color = 'white';
})

let next = document.querySelector('.arrow i'); 
let myImg = document.querySelector('.home-text .myImg');
let images = ['image1.jfif', 'image2.jfif', 'image3.jfif', 'image4.jfif'];
let currentIndex = 0;
next.onclick = () => {
    next.style.color = 'green';
    // myImg.style.display = 'block';
    currentIndex = (currentIndex + 1) % images.length;
    myImg.src = images[currentIndex];
};

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

// let destination = document.querySelectorAll('.row .row-img');
// destination.onclick = () =>{
//     for(auto &img ; destination){
//         destination[img].style.display = 'none';
//     }
// }