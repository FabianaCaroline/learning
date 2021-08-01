const iconeOlho = document.querySelector(".senha img");
const inputSenha = document.querySelector(".senha input");

iconeOlho.addEventListener('click', (event) => {
    const fechado = "./assets/olho-fechado.svg";
    const aberto = "./assets/olho-aberto.svg";

    if (iconeOlho.classList.contains('olho-fechado')) {
        event.target.src = aberto;
        iconeOlho.classList.toggle('olho-fechado');
        iconeOlho.classList.toggle('olho-aberto');

        inputSenha.setAttribute("type", "text");

    } else {
        event.target.src = fechado;
        iconeOlho.classList.toggle('olho-aberto');
        iconeOlho.classList.toggle('olho-fechado');

        inputSenha.setAttribute("type", "password");
    }



});