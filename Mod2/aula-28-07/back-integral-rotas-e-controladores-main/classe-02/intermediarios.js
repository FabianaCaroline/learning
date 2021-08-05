function auntenticacao(req, res, next) {
    if (req.query.senha === "cubos123") {
        next();
    } else{
        res.status(401);
        res.send({erro: "A senha está incorreta"});
    }
}

module.exports = {
    auntenticacao
};