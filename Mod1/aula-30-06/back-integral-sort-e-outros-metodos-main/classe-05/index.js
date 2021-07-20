const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const temBebida = palavras.some(x => x.toLowerCase()==="cerveja"||x.toLowerCase==="vodka");

if (temBebida) {
console.log("revise sua lista, joão. possui bebida com venda proibida");
} else{
    console.log("tudo certo, vamos as compras!");
}