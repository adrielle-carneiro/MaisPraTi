/*Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.*/

let carrinho = {
    itens: [
        {nome: 'Saia', quantidade: 2, precoUnitario: 50},
        {nome: 'Meia', quantidade: 1, precoUnitario: 100},
        {nome: 'Camisa', quantidade: 3, precoUnitario: 30},
    ]
};

let total = 0;

carrinho.itens.forEach(function(item) {
    total += item.quantidade * item.precoUnitario;
});

console.log(total);
