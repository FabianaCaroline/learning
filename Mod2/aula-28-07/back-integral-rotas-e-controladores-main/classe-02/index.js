const express = require('express');
const roteador = require('./roteador');
const {auntenticacao}= require("./intermediarios");
const app = express();

app.use(express.json());
app.use(auntenticacao);
app.use(roteador);

app.listen(8000);
