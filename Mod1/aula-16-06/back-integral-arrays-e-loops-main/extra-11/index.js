const original = [5, 7, 13, 17, 26, 34, 118, 245];
let newArray = [];

for (const index of original) {
    if(index>10&&index<20||index>100){
        newArray.push(index);
    }
}
console.log(newArray);