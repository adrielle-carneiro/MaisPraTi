/*4. Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.*/

const pessoas = [
    { nome: 'Lucas', idade: 25, cidade: 'Recife' },
    { nome: 'Adrielle', idade: 30, cidade: 'Brasília' },
    { nome: 'Elton', idade: 35, cidade: 'São Paulo' }
];

for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}