const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33];
const notasUnicas = [];

notas.forEach(x =>{
    const numeroRepetido = notasUnicas.find(y => y === x);
     if(!numeroRepetido){
         notasUnicas.push(x);
     }
});

console.log(notasUnicas);