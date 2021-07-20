let area = 0;
const altura = 20;
const raio = 5;
const pi = Math.PI;

area = (2*pi*raio)*(raio+altura);

console.log(`A área total do cilindro de raio ${raio} e ${altura} é igual a ${area.toFixed(2)}.`);