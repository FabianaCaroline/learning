const imagens = [{
    src: "assets/gallery/image 1.png"
},
{
   src:"assets/gallery/image 2.png"
},
{
   src:"assets/gallery/image 3.png"
},
{
   src:"assets/gallery/image 4.png"
},
{
   src:"assets/gallery/image 5.png"
},
{
   src:"assets/gallery/image 6.png"
},
{
   src:"assets/gallery/image 7.png"
},
{
   src:"assets/gallery/image 8.png"
},
{
   src:"assets/gallery/image 9.png"
},
{
   src:"assets/gallery/image 10.png"
}];

const galeria = document.querySelector(".galeria");

document.body.onload = adicionarImagensGaleria;

function adicionarImagensGaleria() {

    imagens.forEach((x) => {
        const cardImg = document.createElement("div");
        cardImg.classList.add("card-img");

        const img = document.createElement("img");
        img.setAttribute("src", x.src);

        const divDesc = document.createElement("div");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const textoH2 = document.createTextNode("Lorem ipsum");
        const textoH3 = document.createTextNode("há 1 mês");

        h2.appendChild(textoH2);
        h3.appendChild(textoH3);

        divDesc.appendChild(h2);
        divDesc.appendChild(h3);

        cardImg.appendChild(img);
        cardImg.appendChild(divDesc);

        galeria.appendChild(cardImg);
    });
}

const menuLateral = document.querySelector(".menu-lateral");
const hamburguerIcon = document.querySelector("#hamburguer-icon");

hamburguerIcon.addEventListener("click", () => {
    menuLateral.classList.add("menu-aberto");
});