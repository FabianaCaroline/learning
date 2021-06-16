const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let anames = [];

for (const index of nomes) {
    if(index[0]==="A"||index[0]==="a"){
        anames.push(index);
    }
}
console.log(anames);