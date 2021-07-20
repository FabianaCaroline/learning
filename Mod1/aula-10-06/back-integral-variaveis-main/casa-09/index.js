let somaAngulos = 0;
let valorAngulo = 0;
const lados = 6;
const poligonoRegular = true;

if(poligonoRegular){
    somaAngulos = (lados-2)*180;
    valorAngulo = somaAngulos/lados;
    console.log(`A soma dos ângulos internos do polígono é igual a ${somaAngulos}° e cada ângulo do polígono vale ${valorAngulo}°.`);
} else{
    console.log("Desculpe, mas este programa apenas calcula a soma dos Ângulos internos de polígonos regulares.");
}