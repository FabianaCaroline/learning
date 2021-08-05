const express = require('express');
const controladorAlunos = require('./controladores/alunos');
const roteador = express();

roteador.get("/alunos", controladorAlunos.getAlunos);
roteador.get("/alunos/:idAluno", controladorAlunos.getAlunoPorID);
roteador.post("/alunos", controladorAlunos.postAluno);

module.exports = roteador;