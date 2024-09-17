/*Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.*/

const produtos = [
    { nome: 'Celular', preco: 1500, desconto: 0.1 },
    { nome: 'Notebook', preco: 3000, desconto: 0.1 },
    { nome: 'Tablet', preco: 1200, desconto: 0.1 }];


function aplicarDesconto(produtos) {
    produtos.forEach(function(produto) {
        console.log('Preço do(a) ' + produto.nome + ' antes do desconto: ' + produto.preco);
        produto.preco -= produto.preco * produto.desconto;
        console.log('Preço depois do desconto: ' + produto.preco);
    });
}

aplicarDesconto(produtos);