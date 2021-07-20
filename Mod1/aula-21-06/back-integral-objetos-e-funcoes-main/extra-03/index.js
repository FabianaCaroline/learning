
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
        let itens = this.calcularTotalDeItens();
        let total = this.calcularTotalAPagar();
        console.log(`Cliente: ${this.nomeDoCliente}\nTotal de itens: ${itens} ${itens==1?"item":"itens"}\nTotal a pagar: R$ ${(total/100).toFixed(2)}\n`);
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
    },
    imprimirDetalhes: function () {
        let cont = 0;
        let totalAPagar = this.calcularTotalAPagar();
        let totalItens = this.calcularTotalDeItens();

        console.log(`Cliente: ${this.nomeDoCliente}\n`);

        for (const item of this.produtos) {
            let totalProduto = item.qtd*item.precoUnit;
            cont ++;
            console.log(`Item ${cont} - ${item.nome} - ${item.qtd} und - R$ ${(totalProduto/100).toFixed(2)}`);
        }

        console.log(`\nTotal de itens: ${totalItens} ${totalItens==1?"item":"itens"}\nTotal a pagar: R$ ${(totalAPagar/100).toFixed(2)}`);
    },
    calcularTotalDeItens: function () {
        let totalItens = 0;
        for (const item of this.produtos) {
            totalItens += item.qtd;   
        }
        return totalItens;
    },
    calcularTotalAPagar: function () {
        let totalAPagar = 0;
        for (const item of this.produtos) {   
            totalAPagar += item.precoUnit*item.qtd;
        }
        return totalAPagar;
    },
    calcularDesconto: function () {
        let descontoMod1 = 0;
        let descontoMod2 = 0;
        let totalAPagar = this.calcularTotalAPagar();
        let totalItens = this.calcularTotalDeItens();

        if(totalItens>4){
            let menorValor = this.produtos[0].precoUnit;
            for (const item of this.produtos) {
                if(item.precoUnit<menorValor){
                    menorValor = item.precoUnit;
                }
            }
            descontoMod1 = menorValor;
        }
        if(totalAPagar>100){
            descontoMod2 = totalAPagar*0.1;
        }

        if(descontoMod1>descontoMod2){
            return (descontoMod1/100).toFixed(2);
        } else{
            return (descontoMod2/100).toFixed(2);
        }
    }
}
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);

console.log(carrinho.calcularDesconto());
