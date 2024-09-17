/*Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.*/

const filmes = [
    { titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola", anoLancamento: 1972 },
    { titulo: "Interestelar", diretor: "Christopher Nolan", anoLancamento: 2014 },
    { titulo: "A Origem", diretor: "Christopher Nolan", anoLancamento: 2010 }
];

function getTitulosFilmes(filmes) {
    const titulosFilmes = [];
    filmes.forEach(function(filme) {
        titulosFilmes.push(filme.titulo);
    });
    return titulosFilmes;
}

const titulosFilmes = getTitulosFilmes(filmes);

console.log(titulosFilmes);
