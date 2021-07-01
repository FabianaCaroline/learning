function validarEmail(email) {
    if(!email.includes("@")){
        console.log("E-mail inválido");
    } else if(email.includes('.')){
        if(email[0]==="."||email[email.length-1]==="."){
            console.log("E-mail inválido");
        }
        else{
            console.log("E-mail válido");
        }
    } else{
        console.log("E-mail inválido");
    }
}

const email = "jose.messias@.com";
validarEmail(email);
