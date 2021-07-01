function formatarNumeroCelular(numero) {
    if(numero.length==10&&numero[2]=="9"){
        console.log(`(${numero.substr(0,2)}) ${numero.substr(2,1)} ${numero.substr(3,4)}-${numero.substr(7)}`);
    } else if(numero.length===8){
        numero = "9"+numero;
        console.log(`${numero.substr(0,1)} ${numero.substr(1,4)}-${numero.substr(5)}`);
    } else if(numero.length===9&&numero[0]==="9"){
        console.log(`${numero.substr(0,1)} ${numero.substr(1,4)}-${numero.substr(5)}`);
    } else{
        console.log("Insira um número válido");
    }
}

const celular = 7199918888;
const numeroTelefone = celular.toString();

formatarNumeroCelular(numeroTelefone);