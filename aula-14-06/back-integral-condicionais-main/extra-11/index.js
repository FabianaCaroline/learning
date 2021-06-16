//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

let valorParcela = 0;

if(mesesDecorridos<=60&&rendaMensalEmCentavos>200000){
    valorParcela = 0.18*rendaMensalEmCentavos;
    console.log(`O valor da parcela a ser pago esse mês é de R$${(valorParcela/100).toFixed(2)}`);
} else{
    console.log(`${mesesDecorridos>60?"Você não precisa pagar mais as parcelas!":"Você ainda não está apt@ a pagar as parcelas."}`);
}