const buttonOpen = document.querySelector('.header-right > a');

const menu = document.querySelector('.hamburger-menu');

buttonOpen.addEventListener('click', function() {

    menu.classList.add("active");

});

const buttonClosed = document.querySelector('.close');

buttonClosed.addEventListener('click', function() {

    menu.classList.remove("active");

});

