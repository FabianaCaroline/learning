const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

frutas.reverse();

const arrayInvertido = frutas.join(', ');

frutas.reverse();
frutas.shift();
frutas.pop();
frutas.push("Melão");

console.log(arrayInvertido+"\n"+frutas);