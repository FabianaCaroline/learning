const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let sum = 0;

for (const index of numeros) {
    if((index%2)===0){
        sum += index;
    }
}
console.log(sum);