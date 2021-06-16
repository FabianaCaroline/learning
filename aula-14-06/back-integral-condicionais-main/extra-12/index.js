const diaDaSemana = 3;
let dias = ["Segunda Feira", "Terça Feira", "Quarta Feira", "Quinta Feira", "Sexta Feira", "Sábado", "Domingo"];

if(diaDaSemana<8&&diaDaSemana>0){
    console.log(dias[diaDaSemana-1]);
} else{
    console.log("Coloque um valor válido no escopo de 1 a 7");
}