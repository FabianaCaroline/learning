const express = require('express');
const controller = require('./controllers/livros');

const router = express();

router.get("/livros", controller.consultarLivros);
router.get("/livros/:idLivro", controller.consultarLivroID);
router.post("/livros", controller.adicionarLivro);
router.put("/livros/:idLivro", controller.substituirLivro);
router.patch("/livros/:idLivro", controller.alterarLivro);
router.delete("/livros/:idLivro", controller.deletarLivro);

module.exports = router;