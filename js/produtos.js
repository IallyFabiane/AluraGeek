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

campo2.addEventListener('blur', (event) => {
    event.target.closest('.contato__elementos--textarea').style.padding = "0px 6px";
    campo2.style.borderBottom = "none";
});

const contatoForm = document.querySelector('.contato__form');
contatoForm.addEventListener('submit', (event) => {
    event.preventDefault();
})

const produtosBabyYoda = document.querySelector('.produtos__baby-yoda');
const iconeEditarBabyYoda = produtosBabyYoda.children[1];
const iconeExcluirBabyYoda = produtosBabyYoda.children[2];

const produtosNintendo = document.querySelector('.produtos__nintendo');
const iconeEditarNintendo = produtosNintendo.children[1];
const iconeExcluirNintendo = produtosNintendo.children[2];

const produtosJoystick = document.querySelector('.produtos__joystick');
const iconeEditarJoystick = produtosJoystick.children[1];
const iconeExcluirJoystick = produtosJoystick.children[2];

const produtosPlayStation = document.querySelector('.produtos__joystick');
const iconeEditarPlayStation = produtosPlayStation.children[1];
const iconeExcluirPlayStation = produtosPlayStation.children[2];

const produtosOculos = document.querySelector('.produtos__oculos');
const iconeEditarOculos = produtosOculos.children[1];
const iconeExcluirOculos = produtosOculos.children[2];

const produtosGameBoy = document.querySelector('.produtos__game-boy');
const iconeEditarGameBoy = produtosGameBoy.children[1];
const iconeExcluirGameBoy = produtosGameBoy.children[2];

const produtosNintendoSwitch = document.querySelector('.produtos__nintendo-switch');
const iconeEditarNintendoSwitch = produtosNintendoSwitch.children[1];
const iconeExcluirNintendoSwitch = produtosNintendoSwitch.children[2];

function adicionarOuRemoverClasses() {
  if (window.innerWidth >= 768 && window.innerWidth <= 993) {
    iconeEditarBabyYoda.classList.remove('produtos__icone-editar5');
    iconeEditarBabyYoda.classList.add('produtos__icone-editar1--tablet');
    iconeExcluirBabyYoda.classList.remove('produtos__icone-excluir5');
    iconeExcluirBabyYoda.classList.add('produtos__icone-excluir1--tablet');

    iconeEditarNintendo.classList.remove('produtos__icone-editar3');
    iconeEditarNintendo.classList.add('produtos__icone-editar1--tablet');
    iconeExcluirNintendo.classList.remove('produtos__icone-excluir3');
    iconeExcluirNintendo.classList.add('produtos__icone-excluir1--tablet');

    iconeEditarOculos.classList.remove('produtos__icone-editar5');
    iconeEditarOculos.classList.add('produtos__icone-editar1--tablet');
    iconeExcluirOculos.classList.remove('produtos__icone-excluir5');
    iconeExcluirOculos.classList.add('produtos__icone-excluir1--tablet');

    iconeEditarGameBoy.classList.remove('produtos__icone-editar6');
    iconeEditarGameBoy.classList.add('produtos__icone-editar4--tablet');
    iconeExcluirGameBoy.classList.remove('produtos__icone-excluir6');
    iconeExcluirGameBoy.classList.add('produtos__icone-excluir4--tablet');

    iconeEditarJoystick.classList.remove('produtos__icone-editar1');
    iconeEditarJoystick.classList.add('produtos__icone-editar3--tablet');
    iconeExcluirJoystick.classList.remove('produtos__icone-excluir1');
    iconeExcluirJoystick.classList.add('produtos__icone-excluir3--tablet');
    
    iconeEditarPlayStation.classList.remove('produtos__icone-editar2');
    iconeEditarPlayStation.classList.add('produtos__icone-editar4--tablet');
    iconeExcluirPlayStation.classList.remove('produtos__icone-excluir2');
    iconeExcluirPlayStation.classList.add('produtos__icone-excluir4--tablet');

    iconeEditarNintendoSwitch.classList.remove('produtos__icone-editar4');
    iconeEditarNintendoSwitch.classList.add('produtos__icone-editar5--tablet');
    iconeExcluirNintendoSwitch.classList.remove('produtos__icone-excluir4');
    iconeExcluirNintendoSwitch.classList.add('produtos__icone-excluir5--tablet');

  } else {
    iconeEditarBabyYoda.classList.remove('produtos__icone-editar1--tablet');
    iconeEditarBabyYoda.classList.add('produtos__icone-editar5');
    iconeExcluirBabyYoda.classList.remove('produtos__icone-excluir1--tablet');
    iconeExcluirBabyYoda.classList.add('produtos__icone-excluir5');

    iconeEditarNintendo.classList.remove('produtos__icone-editar1--tablet');
    iconeEditarNintendo.classList.add('produtos__icone-editar3');
    iconeExcluirNintendo.classList.remove('produtos__icone-excluir1--tablet');
    iconeExcluirNintendo.classList.add('produtos__icone-excluir3');

    iconeEditarOculos.classList.remove('produtos__icone-editar1--tablet');
    iconeEditarOculos.classList.add('produtos__icone-editar5');
    iconeExcluirOculos.classList.remove('produtos__icone-excluir1--tablet');
    iconeExcluirOculos.classList.add('produtos__icone-excluir5');

    iconeEditarGameBoy.classList.remove('produtos__icone-editar4--tablet');
    iconeEditarGameBoy.classList.add('produtos__icone-editar6');
    iconeExcluirGameBoy.classList.remove('produtos__icone-excluir4--tablet');
    iconeExcluirGameBoy.classList.add('produtos__icone-excluir6');

    iconeEditarJoystick.classList.remove('produtos__icone-editar3--tablet');
    iconeEditarJoystick.classList.add('produtos__icone-editar1');
    iconeExcluirJoystick.classList.remove('produtos__icone-excluir3--tablet');
    iconeExcluirJoystick.classList.add('produtos__icone-excluir1');

    iconeEditarPlayStation.classList.remove('produtos__icone-editar4--tablet');
    iconeEditarPlayStation.classList.add('produtos__icone-editar2');
    iconeExcluirPlayStation.classList.remove('produtos__icone-excluir4--tablet');
    iconeExcluirPlayStation.classList.add('produtos__icone-excluir2');

    iconeEditarNintendoSwitch.classList.remove('produtos__icone-editar5--tablet');
    iconeEditarNintendoSwitch.classList.add('produtos__icone-editar4');
    iconeExcluirNintendoSwitch.classList.remove('produtos__icone-excluir5--tablet');
    iconeExcluirNintendoSwitch.classList.add('produtos__icone-excluir4');

  }
}

// chamando a função quando a tela é redimensionada
window.addEventListener('resize', adicionarOuRemoverClasses);

// chamando a função na carga inicial da página
adicionarOuRemoverClasses();






