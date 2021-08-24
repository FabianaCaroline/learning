function promocaoValida(dataInicio, dataSolicitacao) {
    const intervalo = (+dataSolicitacao - +dataInicio) / 1000 / 60 / 60 / 24;

    console.log(intervalo);
    if (intervalo > 30) {
        return false;
    } else {
        return true;
    }
}

console.log(promocaoValida(new Date(), new Date(2021, 8, 23, 9, 15)));
