const cpf = "12345678900";
const cnpj = "12345678000199";

function validarCPF(cpf) {
    if(cpf.length===11){
        console.log(`${cpf.substr(0,3)}.${cpf.substr(3,3)}.${cpf.substr(6,3)}-${cpf.substr(9)}`);
    } else{
        console.log("CPF Inválido");
    }
}
function validarCNPJ(cnpj) {
    if(cnpj.length===14){
        console.log(`${cnpj.substr(0,2)}.${cnpj.substr(2,3)}.${cnpj.substr(5,3)}/${cnpj.substr(8,4)}-${cnpj.substr(12)}`)
    } else{
        console.log("CNPJ Inválido");
    }
}

validarCPF(cpf);
validarCNPJ(cnpj);