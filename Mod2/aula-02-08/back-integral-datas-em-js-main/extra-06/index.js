function promocaoValida(dataInicio, dataSolicitacao) {
    const intervalo = (+dataSolicitacao - +dataInicio) / 1000 / 60 / 60;

    if (intervalo > 24) {
        return false;
    } else {
        return true;
    }
}

console.log(promocaoValida(new Date(), new Date(2021, 7, 25, 8, 15)));
