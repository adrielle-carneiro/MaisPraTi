/*Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.*/

function contarClientes(clientes) {
    let cont = 0;
    clientes.forEach(function(cliente) {
        if (cliente.idade > 30) {
            cont++;
        }
    });
    return cont;
}

const clientes = [
    { nome: 'Lucas', idade: 25, cidade: 'Recife' },
    { nome: 'Adrielle', idade: 30, cidade: 'Brasília' },
    { nome: 'Elton', idade: 35, cidade: 'São Paulo' }
];

let cont = 0;
cont = contarClientes(clientes);

console.log("Total de clientes com mais de 30 anos: " + cont);
