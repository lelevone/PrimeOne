
const burger = document.querySelector('.header__burger');
const body = document.querySelector('body');
const headerBot = document.querySelector('.header-bot');

burger.onclick = () =>{
  burger.classList.toggle('active');
  headerBot.classList.toggle('active');
  body.classList.toggle('lock');
  
}

