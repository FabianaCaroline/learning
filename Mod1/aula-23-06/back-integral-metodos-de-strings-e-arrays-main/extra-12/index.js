function gerarNickname(nome) {
    let nomeAlterado = nome.split(" ").join('').toLowerCase();
    if (nomeAlterado.length>13) {
        return `@${nomeAlterado.substr(0,12)}`;
    } else{
        return `@${nomeAlterado}`;
    }
}

const nome = 'Guido Cerqueira';

console.log(gerarNickname(nome));