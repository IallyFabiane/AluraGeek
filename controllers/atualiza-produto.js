const produto = [
    {
      "id": 18,
      "imgURL": "assets/img/pikachu.png",
      "alt": "pikachu",
      "nome": "Pikachu",
      "preco": "60,00",
      "section": "produtos__diversos",
      "area": "produtos__pikachu",
      "numero": "produtos__descricao6",
      "descricao": "Sagittis id consectetur purus ut faucibus."
    }
  ];
  
  function atualizaProdutos() {
    const formulario = document.querySelector('.editar__produtos-form');
    const botaoEditar = document.querySelector('.editar__produtos-button');
  
    botaoEditar.addEventListener('click', function (event) {
      event.preventDefault();
      
      const url = formulario.url.value;
      const categories = formulario.categories.value;
      const name = formulario.name.value;
      const price = formulario.price.value;
      const descricao = formulario.message.value;
      
      const produtoAtualizado = {
        imgURL: url,
        section: categories,
        nome: name,
        preco: price,
        descricao: descricao
      };
      
      const idProduto = produto[0].id; //o objeto produto é uma lista de produtos retornada do servidor, mas apenas um produto será retornado, por isso é utilizado o índice 0 para acessar o primeiro elemento da lista.
      
      fetch(`http://localhost:3000/produtos/${idProduto}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtoAtualizado)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // atualiza a lista de produtos
        fetch('http://localhost:3000/produtos')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          produto.length = 0;
          produto.push(...data);
        })
        .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
    });
  }
  
  atualizaProdutos();
  