const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const maiorString = cidades.reduce((cont, value) =>{
    if (value.length>cont.length) {
        return value;
    } else{
        return cont;
    }
});

console.log(maiorString);