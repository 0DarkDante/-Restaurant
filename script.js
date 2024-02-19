let burger = document.querySelector('#burger'),
    menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('disp');
});    
