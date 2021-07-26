const quizzes = [
    {
        'quiz-1': '2 + 2',
        resposta: 2 + 2
    },
    {
        'quiz-2': '8 - 4',
        resposta: 8 - 4
    },
    {
        'quiz-3': '3 * 3',
        resposta: 3 * 3
    },
    {
        'quiz-4': '10 / 5',
        resposta: 10 / 5
    },
    {
        'quiz-5': '8 + 7',
        resposta: 8 + 7
    },
    {
        'quiz-6': '47 - 8',
        resposta: 47 - 8
    },
    {
        'quiz-7': '7 * 15',
        resposta: 7 * 15
    },
    {
        'quiz-8': '144 / 2',
        resposta: 144 / 2
    },
    {
        'quiz-9': '7 + 9',
        resposta: 7 + 9
    },
    {
        'quiz-10': '17 - 9',
        resposta: 17 - 9
    }
];

for (let index = 0; index < quizzes.length; index++) {
    const id = `quiz-${index+1}`;
    const content = quizzes[index][id];
    const resposta = quizzes[index].resposta;

    document.body.onload = newLabel(id, content);
    document.body.onload = newInput(id, resposta);
    
}

const inputs  = document.querySelectorAll('input');
    
inputs.forEach(input => {
    input.addEventListener('change', (event) =>{
        console.log(event)

        const inputModificado = event.target;
        if(inputModificado.value === inputModificado.dataset.resposta){
            input.classList.add('acerto');
            input.classList.remove('erro');
        } else if(inputModificado.value === ""){
            input.classList.remove('erro');
            input.classList.remove('acerto');
        } else{
            input.classList.add('erro');
            input.classList.remove('acerto');
        }
    });
});


function newLabel(id, content) {
    const element = document.createElement("label");
    
    element.setAttribute("for", id);
    element.textContent = content;

    const label = document.getElementById("");
    document.body.insertBefore(element, label);
}

function newInput(id, resposta) {
    const element = document.createElement("input");
    
    element.setAttribute("id", id);
    element.setAttribute("type","text");
    element.setAttribute("data-resposta", resposta);

    const input = document.getElementById("");
    document.body.insertBefore(element, input);
}