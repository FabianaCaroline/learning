const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";
const posicao = livros.indexOf(nomeDoLivro);
if(posicao!=-1){
    console.log(`O livro está na posição ${posicao+1}`);
} else{
    console.log("Não temos este livro na estante, busque outro título.");
}

