function imprimirNomes(jogadores) {
    if (index<jogadores.length) {
        console.log(jogadores[index]);
        index++;
    } else{
        console.log("A rodada terminou!");
        clearInterval(intervalId);
    }
}

let index = 0;
const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];
const intervaloJogador = (10/jogadores.length)*1000;

imprimirNomes(jogadores);
const intervalId = setInterval(imprimirNomes, intervaloJogador, jogadores);