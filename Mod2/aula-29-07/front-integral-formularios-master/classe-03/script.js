const lofi = ["Friendship - Tido Kang", "Farewell - Tido Kang", "Always Smile - Tido Kang"];
const pop = ["Perfect Symphony - Ed Sheeran", "A Thousand Years - Christina Perri", "The Chainsmokers & Coldplay - Something Just Like This"];
const erudita = ["Symphony No. 9 'From the New World' - Dvořák", "Piano Sonata No. 14 - Beethoven", "Canon In D - Pachelbel"];

const generosMusicais = document.querySelector("#generos");
const musicaInput = document.querySelector("#musica");
const btnSubmit = document.querySelector("button");


btnSubmit.addEventListener('click', () => {
    if (generosMusicais.value === "Lo-fi") {
        const musica = Math.floor(Math.random() * lofi.length);
        musicaInput.value = lofi[musica];
    } else if (generosMusicais.value === "Pop"){
        const musica = Math.floor(Math.random() * pop.length);
        musicaInput.value = pop[musica];
    } else if (generosMusicais.value === "Erudita") {
        const musica = Math.floor(Math.random() * erudita.length);
        musicaInput.value = erudita[musica];
    }
});