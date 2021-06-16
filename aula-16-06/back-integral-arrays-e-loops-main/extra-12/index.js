const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];
let arr = [];

while(filaDeFora.length>0&&filaDeDentro.length<5){
    filaDeDentro.push(filaDeFora.shift());
}
console.log(filaDeDentro);
console.log(filaDeFora);