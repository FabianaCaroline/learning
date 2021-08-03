const livros = require('../dados/livros');

function consultarLivros(req, res) {
    res.json(livros);
}

function consultarLivroID(req, res) {
    const id = Number(req.params.idLivro);
    const idInvalido = {
        mensagem: "O valor do parâmetro ID da URL não é um número válido."
    };
    const nEncontrado = {
        mensagem: "Não existe livro para o ID informado."
    };

    if (isNaN(id)) {
        res.json(idInvalido);
    } else {
        const livroEncontrado = livros.find(livro => livro.id === id);
        if (livroEncontrado) {
            res.json(livroEncontrado);
        } else {
            res.json(nEncontrado);
        }
    }
}

let proximoID = 3;

function adicionarLivro(req, res) {
    const novoLivro = {
        id: proximoID,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        numPaginas: req.body.numPaginas
    }
    proximoID++;
    livros.push(novoLivro);
    res.send("Livro adicionado!");
}

function substituirLivro(req, res) {
    const id = Number(req.params.idLivro);
    const nEncontrado = {
        mensagem: "Não existe livro livro a ser substituído para o ID informado."
    };
    const substituido = {
        mensagem: "Livro substituído."
    };
    const livroEncontrado = livros.find(livro => livro.id === id);


    if (livroEncontrado) {
        livroEncontrado.titulo = req.body.titulo;
        livroEncontrado.autor = req.body.autor;
        livroEncontrado.ano = req.body.ano;
        livroEncontrado.numPaginas = req.body.numPaginas;
        res.json(substituido);
    } else {
        res.json(nEncontrado);
    }
}

function alterarLivro(req, res) {
    const id = Number(req.params.idLivro);
    const livroEncontrado = livros.find(livro => livro.id === id);
    const alterado = {
        mensagem: "Livro alterado."
    };
    const nEncontrado = {
        mensagem: "Não existe livro livro a ser alterado para o ID informado."
    };

    if (livroEncontrado) {
        if (req.body.titulo !== undefined) {
            livroEncontrado.titulo = req.body.titulo;
        }
        if (req.body.autor !== undefined) {
            livroEncontrado.autor = req.body.autor;
        }
        if (req.body.ano !== undefined) {
            livroEncontrado.ano = req.body.ano;
        }
        if (req.body.numPaginas !== undefined) {
            livroEncontrado.numPaginas = req.body.numPaginas;
        }

        res.json(alterado);
    } else {
        res.json(nEncontrado);
    }
}

function deletarLivro(req, res) {
    const id = Number(req.params.idLivro);
    const nEncontrado = {
        mensagem: "Não existe livro livro a ser removido para o ID informado."
    };
    const removido = {
        mensagem: "Livro removido."
    };
    const livroEncontrado = livros.find(livro => livro.id === id);


    if (livroEncontrado) {
        livros.splice(livros.indexOf(livroEncontrado), 1);
        res.json(removido);
    } else {
        res.json(nEncontrado);
    }
}

module.exports = {
    consultarLivros,
    consultarLivroID,
    adicionarLivro,
    substituirLivro,
    alterarLivro,
    deletarLivro
}