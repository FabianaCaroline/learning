const caractere = "E";
let vogal = ['a', 'e', 'i', 'o', 'u'];
let vogalMaiuscula = ['A', 'E', 'I', 'O', 'U'];

if((typeof caractere) == "string"){
    if(vogal.includes(caractere)){
        console.log("Vogal minúscula");
    } else if( vogalMaiuscula.includes(caractere)){
        console.log("Vogal maiúscula");
    } else{
        console.log("consoante");
    }
} else if((typeof caractere)== "number"){
    console.log("Número");
}