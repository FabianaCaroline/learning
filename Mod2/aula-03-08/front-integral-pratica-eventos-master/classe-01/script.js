const imagens = [{
    src: "assets/gallery/image 1.png"
},
{
    src: "assets/gallery/image 2.png"
},
{
    src: "assets/gallery/image 3.png"
},
{
    src: "assets/gallery/image 4.png"
},
{
    src: "assets/gallery/image 5.png"
},
{
    src: "assets/gallery/image 6.png"
},
{
    src: "assets/gallery/image 7.png"
},
{
    src: "assets/gallery/image 8.png"
},
{
    src: "assets/gallery/image 9.png"
},
{
    src: "assets/gallery/image 10.png"
}];

const galeria = document.querySelector(".galeria");
const modal = document.querySelector(".modal");


document.body.onload = adicionarImagensGaleria;

function adicionarImagensGaleria() {

    //criando imagens com a DOM
    imagens.forEach((x) => {
        const cardImg = document.createElement("div");
        cardImg.classList.add("card-img");
        cardImg.setAttribute("data-index", imagens.indexOf(x));

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

    //adicionando Event Listeners
    const card = document.querySelectorAll(".card-img");
    card.forEach(x => {
        x.addEventListener("click", (event) => {
            const index = x.getAttribute("data-index");

            modal.style.display = "flex";
            modal.children[2].setAttribute("src", event.target.src);
            modal.children[2].setAttribute("data-index", index);

            setasModal(index);
        });
    });
}

function setasModal(index) {
    const setaAnterior = document.querySelector("#seta-anterior");
    const setaProximo = document.querySelector("#seta-proximo");

    if (index === '0') {
        setaAnterior.classList.add("oculto");

    } else {
        setaAnterior.classList.remove("oculto");
    }

    if (index === (imagens.length - 1).toString()) {
        setaProximo.classList.add("oculto");
    } else {
        setaProximo.classList.remove("oculto");
    }
}

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

const img = document.querySelector("#img-modal");
const setaProximo = document.querySelector("#seta-proximo");
const setaAnterior = document.querySelector("#seta-anterior");

img.addEventListener("click", (event) => {
    event.stopPropagation();
});

setaAnterior.addEventListener("click", (event) => {
    event.stopPropagation();

    const index = Number(img.getAttribute("data-index")) - 1;
    img.setAttribute("src", imagens[index].src);
    img.setAttribute("data-index", index);
    setasModal(index.toString());

});

setaProximo.addEventListener("click", (event) => {
    event.stopPropagation();

    const index = Number(img.getAttribute("data-index")) + 1;
    img.setAttribute("src", imagens[index].src);
    img.setAttribute("data-index", index);
    setasModal(index.toString());
});

const menuLateral = document.querySelector(".menu-lateral");
const hamburguerIcon = document.querySelector("#hamburguer-icon");
const legendaIcone = document.querySelectorAll("p");

hamburguerIcon.addEventListener("click", () => {

    if (menuLateral.classList.contains("menu-aberto")) {
        menuLateral.classList.remove("menu-aberto");
        hamburguerIcon.setAttribute("src", "assets/closed-menu.svg");
        hamburguerIcon.setAttribute("alt", "Abrir menu");

        legendaIcone.forEach(x => {
            x.classList.add("oculto");
        });
    } else {
        menuLateral.classList.add("menu-aberto");
        hamburguerIcon.setAttribute("src", "assets/open-menu.svg");
        hamburguerIcon.setAttribute("alt", "Fechar menu");

        legendaIcone.forEach(x => {
            x.classList.remove("oculto");
        });
    }
});
