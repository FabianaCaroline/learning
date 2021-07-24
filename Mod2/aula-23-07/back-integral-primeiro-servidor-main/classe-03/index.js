const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
cont = 0;

app.get("/", (req, res) =>{
    if (cont>=jogadores.length) {
        cont = 0;
    }
    res.send(`É a vez de ${jogadores[cont]} jogar!`);

    cont++;
});

app.listen(8000);

