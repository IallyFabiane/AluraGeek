let input = document.querySelector('.menu__search-input');
let menuSearch = document.querySelector('.menu__search');

input.addEventListener('focus', (event) => {
   event.target.style.borderBottom = "1px solid #5595E9";
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
        searchIcon.style.marginTop = '6px';
        searchIcon.style.marginLeft = '6px';
        input.classList.add('menu__search-input--mobile');
    } 
}

function ocultaBarraDePesquisa() {
    if(window.innerWidth < 768) {
        input.style.display = 'none';
        input.classList.remove('menu__search-input--mobile');
    }
}

searchIcon.addEventListener('click', () => {
    mostraBarraDePesquisa();
});
