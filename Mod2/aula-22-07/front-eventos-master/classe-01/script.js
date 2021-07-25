const input = document.querySelector('input');
const li = document.querySelectorAll('li');
const p = document.querySelector('p');

input.addEventListener('keydown', (event) => {
    if (verificarTecla(event.code)) {
        if (!input.value) {
            p.textContent = "Informe o item que deseja buscar!";
            li.forEach(item => {
                item.classList.remove('escondido');
            });
        } else {
            let cont = 0;
            li.forEach(item => {
                if (item.textContent != input.value) {
                    item.classList.add('escondido');
                } else{
                    item.classList.remove('escondido');
                    cont++;
                }
            });
            input.value = "";
            if (cont > 0) {
                p.textContent = `${cont > 1 ? 'Itens' : 'Item'} encontrado${cont > 1 ? 's' : ''}:`;
            } else {
                p.textContent = "Nenhum item encontrado!";
            }
        }
    }
})

function verificarTecla(tecla) {
    return tecla === 'Enter';
}