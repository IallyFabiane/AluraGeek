//GET
export const listaProdutos = () => {
    return fetch("http://localhost:3000/produtos")
    .then(resposta => resposta.json()) //transformando objetos em JSON
    .catch(error => console.log(error))
}

