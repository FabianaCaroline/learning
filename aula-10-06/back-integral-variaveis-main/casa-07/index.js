let totalDeInfeccoes = 0;
const populacaoInfecInicial = 1000;
const taxaTransmPessoa = 4;
const tempo = 100;

totalDeInfeccoes = populacaoInfecInicial * Math.pow(taxaTransmPessoa, (tempo/7));

console.log(`O número de pessoas infectadas em ${tempo} dias partindo de um número inicial de ${populacaoInfecInicial} pessoas infectadas é de ${Math.round(totalDeInfeccoes)} pessoas`);