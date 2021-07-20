//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valor_a_ser_pago = 0; 

if(tipoDePagamento==="credito"){
    valor_a_ser_pago = 0.95*valorDoProduto;
} else if(tipoDePagamento==="cheque"){
    valor_a_ser_pago = 0.97*valorDoProduto;
} else{
    valor_a_ser_pago = 0.9*valorDoProduto;
}
console.log(`Valor a ser pago: ${(valor_a_ser_pago/100).toFixed(2)}`)