const express = require('express');
const controller = require('./controllers/livros');

const app = express();
app.use(express.json());


app.get("/livros", controller.consultarLivros);
app.get("/livros/:idLivro", controller.consultarLivroID);
app.post("/livros", controller.adicionarLivro);
app.put("/livros/:idLivro", controller.substituirLivro);
app.patch("/livros/:idLivro", controller.alterarLivro);
app.delete("/livros/:idLivro", controller.deletarLivro);

app.listen(8000);