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

const form = document.querySelector('.adicionar__produtos-form');
const urlInput = form.querySelector('input[name="url"]');
const categoriesInput = form.querySelector('input[name="categories"]');
const nameInput = form.querySelector('input[name="name"]');
const priceInput = form.querySelector('input[name="price"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Função para obter o último ID dos produtos
const obterUltimoID = async () => {
  try {
    const response = await fetch('http://localhost:3000/produtos/ultimoID');
    const ultimoID = await response.json();
    return ultimoID + 1; // Adiciona 1 ao último ID para obter o próximo ID
  } catch (error) {
    console.error(error);
  }
};

// Função para adicionar um novo produto
const adicionarProduto = async (event) => {
  event.preventDefault();

  const response = await fetch('http://localhost:3000/produtos');
  const listaProdutos = await response.json();
  const ultimoProduto = listaProdutos[listaProdutos.length - 1];
  const ultimoID = ultimoProduto ? parseInt(Object.keys(ultimoProduto)[0]) : 0;

  const produto = {
    id: ultimoID + 1,
    imgURL: urlInput.value,
    section: categoriesInput.value,
    nome: nameInput.value,
    preco: priceInput.value,
    descricao: messageInput.value
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(produto)
  };

  try {
    const response = await fetch('http://localhost:3000/produtos', options);
    const produtoCriado = await response.json();
    console.log('Produto criado:', produtoCriado);
  } catch (error) {
    console.error(error);
  }
};


// Função para obter a lista de produtos
const obterListaProdutos = async () => {
  try {
    const response = await fetch('http://localhost:3000/produtos');
    const listaProdutos = await response.json();
    console.log('Lista de produtos:', listaProdutos);
  } catch (error) {
    console.error(error);
  }
};

// Adiciona o evento de submit ao formulário
form.addEventListener('submit', adicionarProduto);

// Obtém a lista de produtos ao carregar a página
window.addEventListener('DOMContentLoaded', obterListaProdutos);