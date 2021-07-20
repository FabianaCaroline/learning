//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor quitado em centavos
const valorPago = 30000;

let valorRestante = 0;
let parcelasAPagar = 0;

if(valorPago<valorDoProduto){
    valorRestante = valorDoProduto-valorPago;
    parcelasAPagar = quantidadeDoParcelamento-((quantidadeDoParcelamento*valorPago)/valorDoProduto);
    console.log(`Restam R$${(valorRestante/100).toFixed(2)} em ${parcelasAPagar} parcelas de R$${((valorRestante/parcelasAPagar)/100).toFixed(2)}`);
}
