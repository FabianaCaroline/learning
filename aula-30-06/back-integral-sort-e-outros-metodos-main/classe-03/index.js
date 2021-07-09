const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNum = numeros.reduce((cont, value) => {
    if(value>cont){
        return value;
    } else{
        return cont;
    }
});
console.log(maiorNum);