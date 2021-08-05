const alunos = require("../dados/alunos");

function validarDadosRequisicao(req) {
    const aluno = alunos.find( aluno => aluno.id === Number(req.params.idAluno));

    if (req.params.idAluno && isNaN(Number(req.params.idAluno))) {
        return {
            mensagem: "O ID precisa ser um número",
            status: 400
        };
    } else if (!aluno) {
        return {
            mensagem: "Aluno não encontrado",
            status: 404
        };
    }
}

function getAlunos(req, res) {
    res.status(200);
    res.json(alunos);
};
function getAlunoPorID(req, res) {
    const erro = validarDadosRequisicao(req);
    const mensagemErro = { erro: erro.mensagem };

    if (erro) {
        res.status(erro.status);
        res.json(mensagemErro);
    } else {
        res.status(200);
        res.json(aluno); 
    }
};


module.exports = {
    getAlunos,
    getAlunoPorID
};