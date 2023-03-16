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

const produtosCaneca = document.querySelector('.produtos__caneca');
const iconeEditarCaneca = produtosCaneca.children[1];
const iconeExcluirCaneca = produtosCaneca.children[2];

const produtosDarthVader = document.querySelector('.produtos__darth-vader');
const iconeEditarDarthVader = produtosDarthVader.children[1];
const iconeExcluirDarthVader = produtosDarthVader.children[2];

const produtosYoda = document.querySelector('.produtos__yoda');
const iconeEditarYoda = produtosYoda.children[1];
const iconeExcluirYoda = produtosYoda.children[2];

const produtosBabyYoda = document.querySelector('.produtos__baby-yoda');
const iconeEditarBabyYoda = produtosBabyYoda.children[1];
const iconeExcluirBabyYoda = produtosBabyYoda.children[2];

const produtosStormtroper = document.querySelector('.produtos__stormtroper');
const iconeEditarStormtroper= produtosStormtroper.children[1];
const iconeExcluirStormtroper = produtosStormtroper.children[2];

const produtosNintendo = document.querySelector('.produtos__nintendo');
const iconeEditarNintendo = produtosNintendo.children[1];
const iconeExcluirNintendo = produtosNintendo.children[2];

const produtosJoystick = document.querySelector('.produtos__joystick');
const iconeEditarJoystick = produtosJoystick.children[1];
const iconeExcluirJoystick = produtosJoystick.children[2];

const produtosPlayStation = document.querySelector('.produtos__playstation');
const iconeEditarPlayStation = produtosPlayStation.children[1];
const iconeExcluirPlayStation = produtosPlayStation.children[2];

const produtosLordSith = document.querySelector('.produtos__lord-sith');
const iconeEditarLordSith = produtosLordSith.children[1];
const iconeExcluirLordSith = produtosLordSith.children[2];

const produtosXboxX = document.querySelector('.produtos__xbox-x');
const iconeEditarXboxX = produtosXboxX.children[1];
const iconeExcluirXboxX = produtosXboxX.children[2];

const produtosAtari = document.querySelector('.produtos__atari');
const iconeEditarAtari = produtosAtari.children[1];
const iconeExcluirAtari = produtosAtari.children[2];

const produtosSnes = document.querySelector('.produtos__snes');
const iconeEditarSnes = produtosSnes.children[1];
const iconeExcluirSnes = produtosSnes.children[2];

const produtosSonic = document.querySelector('.produtos__sonic');
const iconeEditarSonic = produtosSonic.children[1];
const iconeExcluirSonic = produtosSonic.children[2];

const produtosOculos = document.querySelector('.produtos__oculos');
const iconeEditarOculos = produtosOculos.children[1];
const iconeExcluirOculos = produtosOculos.children[2];

const produtosRadioRelogio = document.querySelector('.produtos__radio-relogio');
const iconeEditarRadioRelogio = produtosRadioRelogio.children[1];
const iconeExcluirRadioRelogio = produtosRadioRelogio.children[2];

const produtosPikachu = document.querySelector('.produtos__pikachu');
const iconeEditarPikachu = produtosPikachu.children[1];
const iconeExcluirPikachu = produtosPikachu.children[2];

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

  if(window.innerWidth == 360 && window.innerWidth <= 410) {

    iconeEditarCaneca.classList.remove('produtos__icone-editar1');
    iconeEditarCaneca.classList.add('produtos__icone-editar1--mobile');
    iconeExcluirCaneca.classList.remove('produtos__icone-excluir1');
    iconeExcluirCaneca.classList.add('produtos__icone-excluir1--mobile');

    iconeEditarDarthVader.classList.remove('produtos__icone-editar2');
    iconeEditarDarthVader.classList.add('produtos__icone-editar2--mobile');
    iconeExcluirDarthVader.classList.remove('produtos__icone-excluir2');
    iconeExcluirDarthVader.classList.add('produtos__icone-excluir2--mobile');

    iconeEditarYoda.classList.remove('produtos__icone-editar3');
    iconeEditarYoda.classList.add('produtos__icone-editar1--mobile');
    iconeExcluirYoda.classList.remove('produtos__icone-excluir3');
    iconeExcluirYoda.classList.add('produtos__icone-excluir1--mobile');

    iconeEditarStormtroper.classList.remove('produtos__icone-editar4');
    iconeEditarStormtroper.classList.add('produtos__icone-editar2--mobile');
    iconeExcluirStormtroper.classList.remove('produtos__icone-excluir4');
    iconeExcluirStormtroper.classList.add('produtos__icone-excluir2--mobile');

    iconeEditarBabyYoda.classList.remove('produtos__icone-editar5');
    iconeEditarBabyYoda.classList.add('produtos__icone-editar1--mobile');
    iconeExcluirBabyYoda.classList.remove('produtos__icone-excluir5');
    iconeExcluirBabyYoda.classList.add('produtos__icone-excluir1--mobile');

    iconeEditarLordSith.classList.remove('produtos__icone-editar6');
    iconeEditarLordSith.classList.add('produtos__icone-editar2--mobile');
    iconeExcluirLordSith.classList.remove('produtos__icone-excluir6');
    iconeExcluirLordSith.classList.add('produtos__icone-excluir2--mobile');

    iconeEditarNintendo.classList.remove('produtos__icone-editar3');
    iconeEditarNintendo.classList.add('produtos__icone-editar1--mobile');
    iconeExcluirNintendo.classList.remove('produtos__icone-excluir3');
    iconeExcluirNintendo.classList.add('produtos__icone-excluir1--mobile');

    iconeEditarOculos.classList.remove('produtos__icone-editar5');
    iconeEditarOculos.classList.add('produtos__icone-editar1--mobile');
    iconeExcluirOculos.classList.remove('produtos__icone-excluir5');
    iconeExcluirOculos.classList.add('produtos__icone-excluir1--mobile');

    iconeEditarGameBoy.classList.remove('produtos__icone-editar6');
    iconeEditarGameBoy.classList.add('produtos__icone-editar2--mobile');
    iconeExcluirGameBoy.classList.remove('produtos__icone-excluir6');
    iconeExcluirGameBoy.classList.add('produtos__icone-excluir2--mobile');

    iconeEditarJoystick.classList.remove('produtos__icone-editar1');
    iconeEditarJoystick.classList.add('produtos__icone-editar1--mobile');
    iconeExcluirJoystick.classList.remove('produtos__icone-excluir1');
    iconeExcluirJoystick.classList.add('produtos__icone-excluir1--mobile');
    
    iconeEditarPlayStation.classList.remove('produtos__icone-editar2');
    iconeEditarPlayStation.classList.add('produtos__icone-editar2--mobile');
    iconeExcluirPlayStation.classList.remove('produtos__icone-excluir2');
    iconeExcluirPlayStation.classList.add('produtos__icone-excluir2--mobile');

    iconeEditarNintendoSwitch.classList.remove('produtos__icone-editar4');
    iconeEditarNintendoSwitch.classList.add('produtos__icone-editar2--mobile');
    iconeExcluirNintendoSwitch.classList.remove('produtos__icone-excluir4');
    iconeExcluirNintendoSwitch.classList.add('produtos__icone-excluir2--mobile');

    iconeEditarXboxX.classList.remove('produtos__icone-editar5');
    iconeEditarXboxX.classList.add('produtos__icone-editar1--mobile');
    iconeExcluirXboxX.classList.remove('produtos__icone-excluir5');
    iconeExcluirXboxX.classList.add('produtos__icone-excluir1--mobile');

    iconeEditarAtari.classList.remove('produtos__icone-editar1');
    iconeEditarAtari.classList.add('produtos__icone-editar1--mobile');
    iconeExcluirAtari.classList.remove('produtos__icone-excluir1');
    iconeExcluirAtari.classList.add('produtos__icone-excluir1--mobile');

    iconeEditarSnes.classList.remove('produtos__icone-editar2');
    iconeEditarSnes.classList.add('produtos__icone-editar2--mobile');
    iconeExcluirSnes.classList.remove('produtos__icone-excluir2');
    iconeExcluirSnes.classList.add('produtos__icone-excluir2--mobile');

    iconeEditarSonic.classList.remove('produtos__icone-editar3');
    iconeEditarSonic.classList.add('produtos__icone-editar1--mobile');
    iconeExcluirSonic.classList.remove('produtos__icone-excluir3');
    iconeExcluirSonic.classList.add('produtos__icone-excluir1--mobile');

    iconeEditarRadioRelogio.classList.remove('produtos__icone-editar4');
    iconeEditarRadioRelogio.classList.add('produtos__icone-editar2--mobile');
    iconeExcluirRadioRelogio.classList.remove('produtos__icone-excluir4');
    iconeExcluirRadioRelogio.classList.add('produtos__icone-excluir2--mobile');

    iconeEditarPikachu.classList.remove('produtos__icone-editar6');
    iconeEditarPikachu.classList.add('produtos__icone-editar2--mobile');
    iconeExcluirPikachu.classList.remove('produtos__icone-excluir6');
    iconeExcluirPikachu.classList.add('produtos__icone-excluir2--mobile');
   
  } else {

    iconeEditarCaneca.classList.remove('produtos__icone-editar1--mobile');
    iconeEditarCaneca.classList.add('produtos__icone-editar1');
    iconeExcluirCaneca.classList.remove('produtos__icone-excluir1--mobile');
    iconeExcluirCaneca.classList.add('produtos__icone-excluir1');

    iconeEditarDarthVader.classList.remove('produtos__icone-editar2--mobile');
    iconeEditarDarthVader.classList.add('produtos__icone-editar2');
    iconeExcluirDarthVader.classList.remove('produtos__icone-excluir2--mobile');
    iconeExcluirDarthVader.classList.add('produtos__icone-excluir2');

    iconeEditarYoda.classList.remove('produtos__icone-editar1--mobile');
    iconeEditarYoda.classList.add('produtos__icone-editar3');
    iconeExcluirYoda.classList.remove('produtos__icone-excluir1--mobile');
    iconeExcluirYoda.classList.add('produtos__icone-excluir3');

    iconeEditarStormtroper.classList.remove('produtos__icone-editar2--mobile');
    iconeEditarStormtroper.classList.add('produtos__icone-editar4');
    iconeExcluirStormtroper.classList.remove('produtos__icone-excluir2--mobile');
    iconeExcluirStormtroper.classList.add('produtos__icone-excluir4');

    iconeEditarBabyYoda.classList.remove('produtos__icone-editar1--mobile');
    iconeEditarBabyYoda.classList.add('produtos__icone-editar5');
    iconeExcluirBabyYoda.classList.remove('produtos__icone-excluir1--mobile');
    iconeExcluirBabyYoda.classList.add('produtos__icone-excluir5');

    iconeEditarLordSith.classList.remove('produtos__icone-editar2--mobile');
    iconeEditarLordSith.classList.add('produtos__icone-editar6');
    iconeExcluirLordSith.classList.remove('produtos__icone-excluir2--mobile');
    iconeExcluirLordSith.classList.add('produtos__icone-excluir6');

    iconeEditarNintendo.classList.remove('produtos__icone-editar2--mobile');
    iconeEditarNintendo.classList.add('produtos__icone-editar3');
    iconeExcluirNintendo.classList.remove('produtos__icone-excluir2--mobile');
    iconeExcluirNintendo.classList.add('produtos__icone-excluir3');

    iconeEditarOculos.classList.remove('produtos__icone-editar1--mobile');
    iconeEditarOculos.classList.add('produtos__icone-editar5');
    iconeExcluirOculos.classList.remove('produtos__icone-excluir1--mobile');
    iconeExcluirOculos.classList.add('produtos__icone-excluir5');

    iconeEditarGameBoy.classList.remove('produtos__icone-editar2--mobile');
    iconeEditarGameBoy.classList.add('produtos__icone-editar6');
    iconeExcluirGameBoy.classList.remove('produtos__icone-excluir2--mobile');
    iconeExcluirGameBoy.classList.add('produtos__icone-excluir6');

    iconeEditarJoystick.classList.remove('produtos__icone-editar1--mobile');
    iconeEditarJoystick.classList.add('produtos__icone-editar1');
    iconeExcluirJoystick.classList.remove('produtos__icone-excluir1--mobile');
    iconeExcluirJoystick.classList.add('produtos__icone-excluir1');

    iconeEditarPlayStation.classList.remove('produtos__icone-editar1--mobile');
    iconeEditarPlayStation.classList.add('produtos__icone-editar2');
    iconeExcluirPlayStation.classList.remove('produtos__icone-excluir1--mobile');
    iconeExcluirPlayStation.classList.add('produtos__icone-excluir2');

    iconeEditarNintendoSwitch.classList.remove('produtos__icone-editar2--mobile');
    iconeEditarNintendoSwitch.classList.add('produtos__icone-editar4');
    iconeExcluirNintendoSwitch.classList.remove('produtos__icone-excluir2--mobile');
    iconeExcluirNintendoSwitch.classList.add('produtos__icone-excluir4');

    iconeEditarXboxX.classList.remove('produtos__icone-editar1--mobile');
    iconeEditarXboxX.classList.add('produtos__icone-editar5');
    iconeExcluirXboxX.classList.remove('produtos__icone-excluir1--mobile');
    iconeExcluirXboxX.classList.add('produtos__icone-excluir5');

    iconeEditarAtari.classList.remove('produtos__icone-editar1--mobile');
    iconeEditarAtari.classList.add('produtos__icone-editar1');
    iconeExcluirAtari.classList.remove('produtos__icone-excluir1--mobile');
    iconeExcluirAtari.classList.add('produtos__icone-excluir1');

    iconeEditarSnes.classList.remove('produtos__icone-editar2--mobile');
    iconeEditarSnes.classList.add('produtos__icone-editar2');
    iconeExcluirSnes.classList.remove('produtos__icone-excluir2--mobile');
    iconeExcluirSnes.classList.add('produtos__icone-excluir2');

    iconeEditarSonic.classList.remove('produtos__icone-editar1--mobile');
    iconeEditarSonic.classList.add('produtos__icone-editar3');
    iconeExcluirSonic.classList.remove('produtos__icone-excluir1--mobile');
    iconeExcluirSonic.classList.add('produtos__icone-excluir3');

    iconeEditarRadioRelogio.classList.remove('produtos__icone-editar2--mobile');
    iconeEditarRadioRelogio.classList.add('produtos__icone-editar4');
    iconeExcluirRadioRelogio.classList.remove('produtos__icone-excluir2--mobile');
    iconeExcluirRadioRelogio.classList.add('produtos__icone-excluir4');

    iconeEditarPikachu.classList.remove('produtos__icone-editar2--mobile');
    iconeEditarPikachu.classList.add('produtos__icone-editar6');
    iconeExcluirPikachu.classList.remove('produtos__icone-excluir2--mobile');
    iconeExcluirPikachu.classList.add('produtos__icone-excluir6');

  }
}

// chamando a função quando a tela é redimensionada
window.addEventListener('resize', adicionarOuRemoverClasses);

// chamando a função na carga inicial da página
adicionarOuRemoverClasses();




