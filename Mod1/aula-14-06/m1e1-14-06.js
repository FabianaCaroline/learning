const valor_compra = 10000;
const numeroParcelas = 12;
let valor_parcela = 0;
let valor_a_ser_pago = 0;

if(numeroParcelas>1&&numeroParcelas<7){
    valor_parcela = (valor_compra/100)/numeroParcelas;
    console.log(`O valor total a ser pago é de R$${valor_compra/100} em ${numeroParcelas} parcelas de R$${valor_parcela.toFixed(2)} cada sem juros`);
} else if(numeroParcelas>=7&&numeroParcelas<=12){
    valor_a_ser_pago = (valor_compra/100)*Math.pow((1.01), numeroParcelas);
    valor_parcela = valor_a_ser_pago / numeroParcelas;
    console.log(`O valor total a ser pago é de R$${valor_a_ser_pago.toFixed(2)} em ${numeroParcelas} parcelas de R$${valor_parcela.toFixed(2)} cada com juros de 1% ao mês`);
} else if(numeroParcelas===1){
    valor_a_ser_pago = (valor_compra/100)*0.9;
    console.log(`O valor com desconto de 10% a ser pago é de R$${valor_a_ser_pago}`);
}