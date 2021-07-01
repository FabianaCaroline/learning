function grupoCarros(carros, numero) {
    return carros.slice(numero, numero+3).join(' - ');
}
const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

console.log(grupoCarros(nomes, posicao));