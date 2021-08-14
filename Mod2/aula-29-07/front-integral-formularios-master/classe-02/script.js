const selectEstado = document.querySelector("#estado");
const enviarBtn = document.querySelector("button");
const senha = document.querySelector("#senha");
const confirmacaoSenha = document.querySelector("#senha-confirm");

enviarBtn.addEventListener('click', (event) => {
    if (selectEstado.value === "default") {
        event.preventDefault();
        window.alert("Selecione o estado");
    }

    if (senha.value !== confirmacaoSenha.value) {
        event.preventDefault();
        window.alert("As senhas não conferem, confirme a senha novamente");
    }
});