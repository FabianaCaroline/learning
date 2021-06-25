function imprimirResumoDoCarrinho(carrinho){
    let totalItens = 0;
    let totalAPagar = 0;
    for (const item of carrinho.produtos) {
        totalItens += item.qtd;   
        totalAPagar += item.precoUnit*item.qtd;
    }

    console.log(`Cliente: ${carrinho.nomeDoCliente}\nTotal de itens: ${totalItens} ${totalItens==1?"item":"itens"}\nTotal a pagar: R$ ${(totalAPagar/100).toFixed(2)}`);
}

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
    ]
}

imprimirResumoDoCarrinho(carrinho);