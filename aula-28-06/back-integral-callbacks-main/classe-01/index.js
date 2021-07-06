const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const filtroCidades = cidades.filter((x) => {
    if(x.length<=8&&x.length>0){
        return x;
    }
}).join(', ');

console.log(filtroCidades);