const letras = ["A", "a", "B", "C"];
let cont = 0;

for (const index of letras) {
    if(index==="E"||index==="e"){
        cont++;
    }
}

if(cont>0){
    console.log(`Foram encontradas ${cont} letras "E" ou "e"`);
} else{
    console.log('Nenhuma letra "E" ou "e" foi encontrada');
}
