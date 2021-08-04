const imoveis = require('../dados/imoveis');

function get(req, res) {
    res.json(imoveis);
};
function getPorId(req, res) {
    const id = Number(req.params.idImovel);
    const imovel = imoveis.find( imovel => imovel.id === id);
    
    res.json(imovel);  
};

module.exports = {
    get,
    getPorId
};