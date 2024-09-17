/* Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console. */

const carro = {
    marca: 'Audi',
    modelo: 'BMW',
    ano: 2024,
    cor: 'branco'
};

for (let prop in carro) {
    console.log(carro[prop]);
}