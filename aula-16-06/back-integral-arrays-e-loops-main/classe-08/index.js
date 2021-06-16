const numeros = [3, 24, 1, 8, 11, 7, 15];
let maxNum = numeros[0];

for (const index of numeros) {
    if (index>maxNum) {
        maxNum = index;
    }
}
console.log(maxNum);