const { json } = require('body-parser');
const express = require('express');

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

const app = express();
app.use(express.json());

app.get("/convidados", (req, res) => {
    const presente = {
        mensagem: "Convidado presente"
    };
    const ausente = {
        mensagem: "O convidado buscado não está presente na lista."
    };
    const nome = req.query.nome;

    if (nome) {
        if (convidados.includes(nome)) {
            res.json(presente);
        } else {
            res.json(ausente);
        }
    } else {
        res.send(convidados);
    }
});

app.post("/convidados", (req, res) => {
    const jaExiste = {
        mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
    };
    const adicionado = {
        mensagem: "Convidado adicionado."
    }
    const nome = req.body.nome;

    if (convidados.includes(nome)) {
        res.json(jaExiste)
    } else {
        convidados.push(nome);
        res.json(adicionado);
    }
});

app.delete("/convidados/:nome", (req, res) => {
    const nExiste = {
        mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
    };
    const removido = {
        mensagem: "Convidado removido."
    }
    const nome = req.params.nome;

    if (!convidados.includes(nome)) {
        res.json(nExiste)
    } else {
        convidados.splice((convidados.indexOf(nome)), 1);
        res.json(removido);
    }

});



app.listen(8000);