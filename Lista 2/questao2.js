/* Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto. */ 

const livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
    genero: "Romance"
};

for (let propriedade in livro) {
    if (propriedade === "editora") {
        console.log("A propriedade editora já existe no objeto livro.");
    }else{
        console.log("A propriedade editora não existe no objeto livro.");
        livro.editora = "Livraria Garnier";
    }
}

console.log(livro);
