const pessoa = {
    nome: "José",
    idade: 30,
    altura: 1.75,
    temCNH: true,
    apelidos: [" "]
};

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} cm de altura, ${pessoa.temCNH ==true ?"possui": "não possui"} CNH e ${pessoa.apelidoslength>0?"os seguintes apelidos:":"não possui apelidos."}`);

if(pessoa.apelidos.length>0&&pessoa.apelidos!=" "){
    for(let index of pessoa.apelidos){
        console.log(`- ${index}`);
    }
}