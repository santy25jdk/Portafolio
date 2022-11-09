
const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');

btn.addEventListener('click', function(){
    console.log(menu.classList.toggle('menu-show'));
});