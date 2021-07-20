//ordenar em ordem crescente.
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numeros.sort((a, b) => {
    return a - b;
});
console.log(numeros);

//Ordenar em ordem decrescente.
const numeros1 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numeros1.sort((a, b) => {
    return b - a;
});
console.log(numeros1);

//Ordenar em ordem crescente, com base nos valores dos pontos de código Unicode.
const numeros2 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numeros2.sort();
console.log(numeros2);


//Ordenar em ordem alfabética.
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas.sort((a, b) =>{
    return a.localeCompare(b);
});
console.log(frutas);

//Ordenar em ordem alfabética decrescente.
const frutas1 = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas1.sort((a, b) =>{
    if (a.localeCompare(b)>0) {
        return -1;
    } else{
        return 1;
    } 
});
console.log(frutas1);

//Ordenar ordem crescente, de acordo com a quantidade de caracters.
const frutas2 = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas2.sort((a, b) =>{
    if (a.length>b.length) {
        return 1;
    } else{
        return -1;
    }
});
console.log(frutas2);