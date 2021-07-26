const botao = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const btnConfirmar = document.querySelector(".confirmar");
const btnCancelar = document.querySelector(".cancelar");

botao.addEventListener("click", () => {
    if (botao.classList.contains('inscrito')) {
        modal.classList.remove('escondido');
        btnCancelar.addEventListener("click", () => {
            modal.classList.add('escondido');
        });
        btnConfirmar.addEventListener("click", () => {
            modal.classList.add('escondido');
            botao.classList.remove('inscrito');
            botao.textContent = "INSCREVER-SE";
        })
    } else{
        botao.classList.add('inscrito');
        botao.textContent = "INSCRITO";
    }
});