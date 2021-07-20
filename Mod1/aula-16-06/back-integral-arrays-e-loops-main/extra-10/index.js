const numbers = [8, 11, 4, 1];
let maxNum = numbers[0];
let minNum = numbers[0];
let dif = 0;

for (const index of numbers) {
    if (index>maxNum) {
        maxNum = index;
    }
}

for (const index of numbers) {
    if (index<minNum) {
        minNum = index;
    }
}

dif = maxNum - minNum;

console.log(`${dif>0?dif:"Só há um número no array, insira mais números."}`)
