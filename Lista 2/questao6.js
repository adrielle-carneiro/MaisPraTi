/*Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.*/

const funcionarios = [
    {nome: 'Lucas', cargo:'Analista', salario: 5000},
    {nome: 'Adrielle', cargo:'Gerente', salario: 7000},
    {nome: 'Elton', cargo:'Diretor', salario: 10000}
];

for(const funcionario of funcionarios){
    if(funcionario.salario> 5000){
        console.log(funcionario);
    }
}