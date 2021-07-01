function validarArquivo(arquivo) {
    const arquivosPermitidos = ["jpg", "jpeg", "gif", "png"];
    let extensao = arquivo.split(".");

    if (arquivosPermitidos.includes(extensao[1])) {
        return "Arquivo válido";
    } else{
        return "Arquivo inválido"
    }
}

const nomeArquivo = 'Foto da Familia.png';

console.log(validarArquivo(nomeArquivo));