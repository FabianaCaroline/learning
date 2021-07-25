const express = require('express');
const app = express();
let minutos = 0;
let segundos = 0;
let timer;

app.get("/", (req, res) => {
    const min = minutos.toString().padStart(2, '0');
    const seg = segundos.toString().padStart(2, '0');

    res.send(`Tempo atual do cronômetro: ${min} minuto${minutos > 1 ? 's' : ''} e ${seg} segundo${segundos > 1 ? 's' : ''}`);
});

app.get("/iniciar", (req, res) => {
    timer = cronometro();
    res.send('Cronômetro iniciado!');
});

app.get("/pausar", (req, res) => {
    clearInterval(timer);
    res.send('Cronômetro pausado!');
});

app.get("/continuar", (req, res) => {
    timer = cronometro();
    res.send('Cronômetro continuado!');
});

app.get("/zerar", (req, res) => {
    minutos = 0;
    segundos = 0;
    res.send('Cronômetro zerado!');
});

app.listen(8000);

function cronometro() {
    return setInterval(() => {
        segundos++;
        if (segundos == 60) {
            minutos++;
            segundos -= 60;
        }
    }, 1000);
}