const numeros = [0, 122, 4, 6, 7, 8, 44];

const todosPar = numeros.every(x => x%2===0);

if (todosPar) {
    console.log("array válido");
} else{
    console.log("array inválido");
}