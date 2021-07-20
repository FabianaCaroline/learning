const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

if(totalDeRendimentos>2855970){
    if(aposentada||portadoraDeDoenca){
        console.log("ISENTA!");
    } else{
        console.log("PEGA LEÃO!");
    }
} else{
    console.log("VAZA LEÃO! JÁ TÁ DIFÍCIL SEM VOCÊ!");
}