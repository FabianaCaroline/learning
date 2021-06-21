const pessoa = {
    nome: "José",
    idade: 30,
    altura: 1.75,
    temCNH: true,
    apelidos: ["Jr", "Juninho"]
};

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} cm de altura, ${pessoa.temCNH ==true ?"possui": "não possui"} CNH e ${pessoa.apelidos?"os seguintes apelidos:":"não possui apelidos."}`);

if(pessoa.apelidos&&pessoa.apelidos!==""&&pessoa.apelidos!==" "){
    for(let index of pessoa.apelidos){
        console.log(`- ${index}`);
    }
}