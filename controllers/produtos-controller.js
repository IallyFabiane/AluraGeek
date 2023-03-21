import { listaProdutos } from "../services/produtos-services.js";
 
const novoProduto = (nome, id, imgURL, preco, alt, section, area, numero) => {
  const card = document.createElement('div');
  card.classList.add('produto');
  const conteudo = `
      <img class="produtos__img ${area}" src="${imgURL}" alt="${alt}">
      <article class="produtos__descricao ${numero}">
        <h3 class="produtos__descricao-h3">${nome}</h3>
        <h4 class="produtos__descricao-h4">${preco}</h4>
        <p class="produtos__descricao-p"><a href="produto.html?id=${id}" target="_self" rel="next">Ver produto</a></p>
      </article>
  `;

  card.innerHTML = conteudo;
  return card;
}

const produtos = document.querySelector('[data-product]');

const secoes = {
  'produtos__star-wars': '.produtos__star-wars',
  'produtos__consoles': '.produtos__consoles',
  'produtos__diversos': '.produtos__diversos'
};

const render = async () => {
    try {
      const lista = await listaProdutos();

      lista.map(el => {        
        const section = el.section;
        const container = document.querySelector(secoes[section]);
        container.appendChild(novoProduto(el.nome, el.id, el.imgURL, el.preco, el.alt, el.section, el.area, el.numero))
      })
    } catch (error) {
      console.error(error);
    }
}

window.addEventListener('DOMContentLoaded', () => {
  render();
});



