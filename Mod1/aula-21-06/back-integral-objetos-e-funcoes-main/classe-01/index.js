function corrigirProva(prova) {
    let nota = [0,0];
    let acertos = 0;
    for (const index of prova.questoes) {
        if (index.resposta===index.correta) {
            acertos++;
        }
    }
    nota[0] = acertos;
    nota[1] = acertos*(prova.valor/prova.questoes.length);
    return nota;
}
const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};
let nota = corrigirProva(prova);
console.log(`O alun(a) ${prova.aluno} acertou ${nota[0]} questões e obteve nota ${nota[1]}`);
