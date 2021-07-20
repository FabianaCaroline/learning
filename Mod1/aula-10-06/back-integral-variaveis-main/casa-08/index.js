let circunferencia = 0;
let area = 0;
const raio = 2;
const pi = Math.PI;

circunferencia = 2*pi*raio;
area = pi*(Math.pow(raio, 2));

console.log(`O comprimento da circunferência e área do círculo de raio ${raio} são respectivamente ${circunferencia.toFixed(2)} e ${area.toFixed(2)}.`)