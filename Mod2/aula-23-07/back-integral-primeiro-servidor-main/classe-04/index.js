const express = require('express');
const app = express();

app.get("/somar", (req, res) =>{
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const soma = num1+num2;

    res.send(`A soma é ${String(soma)}`);
});

app.get("/subtrair", (req, res) =>{
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const subtracao = num1-num2;

    res.send(`A subtração é ${String(subtracao)}`);
});

app.get("/multiplicar", (req, res) =>{
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const multiplicacao = num1*num2;

    res.send(`A multiplicação é ${String(multiplicacao)}`);
});

app.get("/dividir", (req, res) =>{
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const divisao = num1/num2;

    res.send(`A divisão é ${String(divisao)}`);
});

app.listen(8000);