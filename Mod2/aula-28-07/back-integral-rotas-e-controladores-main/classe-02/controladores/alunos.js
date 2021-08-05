const alunos = require("../dados/alunos");


function validarDadosRequisicao(req) {
    const aluno = alunos.find(aluno => aluno.id === Number(req.params.idAluno));

    //validar id aluno
    if (req.params.idAluno && isNaN(Number(req.params.idAluno))) {
        return {
            mensagem: "O ID precisa ser um número",
            status: 400
        };
    } else if (req.params.idAluno && !aluno) {
        return {
            mensagem: "Aluno não encontrado",
            status: 404
        };
    }

    //validar campos da inserção de aluno
    if (req.method === "POST") {
        const erro = {
            mensagem: {},
            status: 404
        }
        let cont = 0;

        if (!req.body.nome) {
            cont++;
            erro.mensagem[`erro${cont}`] = "O nome é obrigatório";
        } else if (typeof req.body.nome !== 'string' || !req.body.nome.trim()) {
            cont++;
            erro.mensagem[`erro${cont}`] = "O nome precisa ser uma palavra";
        }

        if (!req.body.sobrenome) {
            cont++;
            erro.mensagem[`erro${cont}`] = "O sobrenome é obrigatório";
        } else if (typeof req.body.sobrenome !== 'string' || !req.body.sobrenome.trim()) {
            cont++;
            erro.mensagem[`erro${cont}`] = "O sobrenome precisa ser uma palavra";
        }

        if (!req.body.idade) {
            cont++;
            erro.mensagem[`erro${cont}`] = "A idade é obrigatória";
        } else if (req.body.idade !== parseInt(req.body.idade) || req.body.idade < 18) {
            cont++;
            erro.mensagem[`erro${cont}`] = "A idade precisa ser um número inteiro maior que 17";
        }

        if (!req.body.curso) {
            cont++;
            erro.mensagem[`erro${cont}`] = "O curso é obrigatório";
        } else if (typeof req.body.curso !== 'string' || !req.body.curso.trim()) {
            cont++;
            erro.mensagem[`erro${cont}`] = "A propriedade curso precisa ser do tipo texto";
        }

        if (cont > 0) {
            return erro;
        }
    }
}



function getAlunos(req, res) {
    res.status(200);
    res.json(alunos);
};

function getAlunoPorID(req, res) {
    const erro = validarDadosRequisicao(req);

    if (erro) {
        const mensagemErro = { erro: erro.mensagem };

        res.status(erro.status);
        res.json(mensagemErro);
    } else {
        res.status(200);
        res.json(aluno);
    }
};



function postAluno(req, res) {
    const erro = validarDadosRequisicao(req);

    if (erro) {
        const mensagemErro = { erro: erro.mensagem };

        res.status(erro.status);
        res.json(mensagemErro);
    } else {
        let proximoId = 1;
        if (alunos.length > 0) {
            const ultimoAluno = alunos[alunos.length-1];
            proximoId = ultimoAluno.id + 1;
        }

        const novoAluno = {
            id: proximoId,
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            idade: req.body.idade,
            curso: req.body.curso
        }

        alunos.push(novoAluno);

        res.status(201);
        res.end();
    }
}


function deleteAluno(req, res) {
    const erro = validarDadosRequisicao(req);

    if (erro) {
        const mensagemErro = { erro: erro.mensagem };

        res.status(erro.status);
        res.json(mensagemErro);
    } else {
        const index = alunos.indexOf(alunos.find( aluno => aluno.id === Number(req.params.idAluno)));
        const alunoRemovido = alunos.splice(index, 1);
        res.status(200);
        res.json(alunoRemovido);
    }
}

module.exports = {
    getAlunos,
    getAlunoPorID,
    postAluno,
    deleteAluno
};