const produtos = [
    {
    nome: "caderno",
    preco: 5000,
    quantidade: 2
    }, 
    {
    nome: "lápis",
    preco: 300,
    quantidade: 2
    },
    {
    nome: "post-it",
    preco: 16000,
    quantidade: 2
    }
];

const cartao = {
    nomeCliente: "Arthur",
    idadeCliente: 23,
    produtos
};

console.log(`Lista de produtos comprados por ${cartao.nomeCliente}, ${cartao.idadeCliente} anos:`);

for (let index = 0; index < cartao.produtos.length; index++) {
    console.log(`- ${cartao.produtos[index]}`);
}