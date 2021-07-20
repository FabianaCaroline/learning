const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const palavra = palavras.find( x => x.length>5);

if (palavra) {
    console.log("existe palavra inválida");
} else{
    console.log("array validado");
}