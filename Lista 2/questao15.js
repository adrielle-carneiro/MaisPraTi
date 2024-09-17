/*Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.*/

let transacoes = [
    {tipo: 'entrada', valor: 50},
    {tipo: 'saida', valor: 20},
    {tipo: 'entrada', valor: 100},
    {tipo: 'saida', valor: 30},
];

let saldoInicial = 1000;

transacoes.forEach(function(transacao) {
    if (transacao.tipo === 'entrada') {
        console.log("entrada: " + transacao.valor);
        saldoInicial += transacao.valor;
    } else {
        console.log("saida: " + transacao.valor);
        saldoInicial -= transacao.valor;
    }
});

console.log("saldo restante: " + saldoInicial);
