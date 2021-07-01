function dividirGrupos(nomes, tamanho) {
    let cont = 0;
    for (let i = 0; i < nomes.length; i += tamanho) {
        cont++;
        console.log(`Grupo ${cont}: ${nomes.slice(i, i + tamanho).join(', ')}`);
    }
}
const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

dividirGrupos(nomes, tamanhoDoGrupo);