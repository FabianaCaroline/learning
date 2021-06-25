
const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        let totalItens = 0;
        let totalAPagar = 0;
        for (const item of this.produtos) {
            totalItens += item.qtd;   
            totalAPagar += item.precoUnit*item.qtd;
        }

        console.log(`Cliente: ${this.nomeDoCliente}\nTotal de itens: ${totalItens} ${totalItens==1?"item":"itens"}\nTotal a pagar: R$ ${(totalAPagar/100).toFixed(2)}\n`);
    },
    addProduto: function (produto) {
        let cont = 0;
        for (const item of this.produtos) {
            if(item.id==produto.id){
                item.qtd += produto.qtd;
                cont ++;
            }
        }
        if(cont==0){
            this.produtos.push(produto);
        }
    }
}
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
