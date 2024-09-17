/* Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades. */

function filtrarPropriedades(obj, valor) {
    const objFiltrado = {};
    for (let prop in obj) {
        if (obj[prop] > valor) {
            objFiltrado[prop] = obj[prop];
        }
    }
    return objFiltrado;
}


const produto = {
    nome: 'Produto 1',
    preco: 20,
    quantidade: 7,
    peso: 2
};

const produtoFiltrado = filtrarPropriedades(produto, 2);
console.log(produtoFiltrado);