let identificador = "123";
let nome = "José da silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

function formatarID(identificador) {
    return identificador.padStart(6, "0");
}

function formatarNome(nome) {
    let arrayNome = nome.split(' ');
    for (let index = 0; index < arrayNome.length; index++) {
        if(arrayNome[index]==="de"||arrayNome[index]==="da"||arrayNome[index]==="das"||arrayNome[index]==="dos"){
            continue;
        } else{
            arrayNome[index] = `${arrayNome[index].substr(0,1).toUpperCase()}${arrayNome[index].substr(1)}`;
        }
    }
    return arrayNome.join(' ');
}
function formatarEmail(email) {
    return email.trim().split(' ').join();

}

console.log(formatarID(identificador));
console.log(formatarNome(nome));
console.log(formatarEmail(email));
console.log(tags.join(', '));
