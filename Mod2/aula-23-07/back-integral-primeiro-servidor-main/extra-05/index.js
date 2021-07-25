const express = require('express');
const app = express();

const lodash = require('lodash');

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let cont = 0;

app.get("/", (req, res) => {
    if (cont >= jogadores.length) {
        cont = 0;
    }
    res.send(`É a vez de ${jogadores[cont]} jogar!`);

    cont++;
});

app.get("/remover", (req, res) => {
    const indice = Number(req.query.indice);
    if (jogadores[indice] === undefined) {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);
    } else {
        lodash.remove(jogadores, n => {
            return n === jogadores[indice];
        });
        res.send(jogadores);
    }
});

app.get("/adicionar", (req, res) => {
    const nome = formatarNome(req.query.nome);
    const indice = req.query.indice;
    let resposta = jogadores;

    if (indice === undefined) {
        jogadores.push(nome);
    } else if (jogadores[Number(indice)] == undefined) {
        resposta = `O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`;
    } else {
        jogadores.splice(indice, 0, nome);
    }
    res.send(resposta);
});

app.listen(8000);

function formatarNome(nome) {
    return nome[0].toUpperCase() + nome.substring(1).toLowerCase();
}