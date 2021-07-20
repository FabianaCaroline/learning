const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

frutas.map((x, i) =>{
   frutas[i] =  `${i} - ` + x[0].toUpperCase() + x.slice(1, x.length).toLowerCase();
});

console.log(frutas);