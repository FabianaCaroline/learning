const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
let impares = [];

//Loop com for
for (let index = 0; index < original.length; index++) {
    if ((original[index]%2)===0) {
        pares.push(original[index]);
    } else{
        impares.push(original[index]);
    }
}
console.log("Loop com for");
console.log(pares);
console.log(impares);

//loop com for...of
pares = [];
impares = [];

for (const index of original) {
    if ((index%2)===0) {
        pares.push(index);
    } else{
        impares.push(index);
    }
}
console.log("Loop com for..of");
console.log(pares);
console.log(impares);

//loop com while
let index = 0;
pares = [];
impares = [];

while (index<original.length) {
    if ((original[index]%2)===0) {
        pares.push(original[index]);
    } else{
        impares.push(original[index]);
    }
    index++;
}
console.log("Loop com while");
console.log(pares);
console.log(impares);