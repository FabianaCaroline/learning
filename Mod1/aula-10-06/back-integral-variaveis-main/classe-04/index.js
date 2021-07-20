let montante = 0;
const capital = 1000;
const taxa = 12.5;
const tempo = 5;

montante = capital * Math.pow((1 + (taxa/100)), tempo);

console.log(`O valor do montante é de R$${Math.round(montante)}`);