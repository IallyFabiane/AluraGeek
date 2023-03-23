function deletaProduto() {
    const formulario = document.querySelector('.deletar__produtos-form');
    const botaoDeletar = document.querySelector('.deletar__produtos-button');
  
    botaoDeletar.addEventListener('click', function (event) {
      event.preventDefault();
  
      const id = formulario.id.value;
      const idString = id.toString();
      const url = formulario.url.value;
      const categoria = formulario.categories.value; // aqui deve ser categoria
      const name = formulario.name.value;
      const price = formulario.price.value;
      const descricao = formulario.message.value;
  
      fetch('http://localhost:3000/produtos')
        .then(response => response.json())
        .then(produtos => {
          const produtoParaDeletar = produtos.find(produto => {
            return (
              produto.id.toString() === idString && // convertendo para string aqui
              produto.imgURL === url &&
              produto.section === categoria && 
              produto.nome === name &&
              produto.preco === price &&
              produto.descricao === descricao
            );
          });
  
          if (produtoParaDeletar && produtoParaDeletar.id.toString() === idString) { // convertendo para string aqui
            fetch(`http://localhost:3000/produtos/${produtoParaDeletar.id}`, {
              method: 'DELETE'
            })
              .then(response => response.json())
              .then(data => {
                    console.log(`Produto deletado: ${JSON.stringify(data)}`);
                // atualiza a lista de produtos
                fetch('http://localhost:3000/produtos')
                  .then(response => response.json())
                  .then(data => {
                    console.log('Lista de produtos atualizada:', data);
                  })
                  .catch(error => console.error(error));
              })
              .catch(error => console.error(error));
          } else {
            console.log('Produto não encontrado na lista ou o ID do produto está incorreto');
          }
        })
        .catch(error => console.error(error));
    });
  }
  
  deletaProduto();
  