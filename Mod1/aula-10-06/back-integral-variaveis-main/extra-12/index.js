let taxaJuros = 0;
const montante = 90000;
const capital = 60000;
const periodos = 24;

taxaJuros = Math.pow((montante/capital), (1/periodos))-1;

console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${(taxaJuros*100).toFixed(3)}%, pois após ${periodos} meses você teve que pagar ${montante} reais`);