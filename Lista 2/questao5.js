/*Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.*/

const alunos = [
    { nome: 'Lucas', nota1: 8, nota2: 7 },
    { nome: 'Adrielle', nota1: 9, nota2: 6 },
    { nome: 'Elton', nota1: 7, nota2: 8 }
];

for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log("o alundo: " + aluno.nome + " tem a média: " + media);
}