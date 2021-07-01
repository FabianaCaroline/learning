function removerPontuacao(numero) {
    return  numero.split('.').join("").split('-').join("").split('/').join("");
}
const cpf = "12.345.678/0001-99";

console.log(removerPontuacao(cpf));