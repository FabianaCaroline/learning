const comentario = "Esse COVID é muito perigoso!";

let frase = comentario.toLowerCase();

if(frase.includes("pandemia")||frase.includes("covid")){
    console.log("Comentário bloqueado por conter palavras proibidas");
} else{
    console.log("Comentário autorizado.");
}