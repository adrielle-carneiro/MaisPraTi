/*Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.*/

let estoque = [
    {produto: 'Camisa', quantidade: 10, minimo: 5},
    {produto: 'Calça', quantidade: 3, minimo: 5},
    {produto: 'Boné', quantidade: 2, minimo: 5},
    {produto: 'Meia', quantidade: 1, minimo: 10},
];

estoque.forEach(function(produto) {
    if (produto.quantidade < produto.minimo) {
        produto.quantidade *= 2;
    }
});

console.log(estoque);