const valorTenis = 129.99;
const valorPago = 80;
let porcentagemDesconto = 0;

porcentagemDesconto = (valorPago*100)/valorTenis;

console.log(`A porcentagem de desconto na compra do Tênis é de ${porcentagemDesconto.toFixed(1)}%`);