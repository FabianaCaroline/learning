const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]

const temIdade = usuarios.filter(x => x.idade>17&&x.idade<66);
const temCNH = temIdade.every(x => x.habilitado);

if(temCNH){
    console.log("Todos passaram no teste");
} else{
    console.log("Todos precisam estar habilitados");
}