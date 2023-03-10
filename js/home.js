let input = document.querySelector('.menu__search-input');
let buttonLogin = document.querySelector('.menu__button');
let menuSearch = document.querySelector('.menu__search');

input.addEventListener('focus', (event) => {
   event.target.style.borderBottom = "1px solid #5595E9";
   if(window.innerWidth < 768) { 
    input.style.borderBottom = 'none';
   }
});

input.addEventListener('blur', (event) => {
   event.target.style.borderBottom = "none";
   ocultaBarraDePesquisa();
   setTimeout(() => {
        input.value = '';
        input.placeholder = 'O que deseja encontrar?';
   }, 4000)
   
});

const searchIcon = document.querySelector('.menu__search-icon')
const path = searchIcon.querySelector('path');

searchIcon.addEventListener('mouseover', function() {
  path.style.fill = 'blue';
});

searchIcon.addEventListener('mouseout', function() {
    path.style.fill = '#A2A2A2';
});


function mostraBarraDePesquisa() {
    if(window.innerWidth < 768) {
        input.style.display = 'flex';
        menuSearch.style.display = 'flex';
        buttonLogin.style.display = 'none';
        searchIcon.style.marginTop = '6px';
        searchIcon.style.marginLeft = '6px';
        input.classList.add('menu__search-input--mobile');
    } 
}

function ocultaBarraDePesquisa() {
    if(window.innerWidth < 768) {
        input.style.display = 'none';
        buttonLogin.style.display = 'block';
        input.classList.remove('menu__search-input--mobile');
    }
}

searchIcon.addEventListener('click', () => {
    mostraBarraDePesquisa();
});

const campo1 = document.getElementById('campo1');
const campo2 = document.getElementById('campo2');

campo1.addEventListener('focus', (event) => {
    let label = campo1.closest('.contato__elementos').querySelector('.contato__label');
    event.target.closest('.contato__elementos').style.padding = "0px"; 
    label.style.color = "#5595E9";
    label.style.padding = "6px 12px";
    campo1.style.borderBottom = "2px solid #5595E9";
    console.log(event.target);
});

campo1.addEventListener('blur', () => {
    let label = campo1.closest('.contato__elementos').querySelector('.contato__label');
    campo1.closest('.contato__elementos').style.padding = "6px 12px";
    label.style.color = "#A2A2A2";
    label.style.padding = "0px";
    campo1.style.borderBottom = "none";
});


campo2.addEventListener('focus', (event) => {
    event.target.closest('.contato__elementos--textarea').style.padding = "0px 6px";
    campo2.style.borderBottom = "2px solid #5595E9";
    console.log(event.target)
});

campo2.addEventListener('blur', () => {
    event.target.closest('.contato__elementos--textarea').style.padding = "0px 6px";
    campo2.style.borderBottom = "none";
});