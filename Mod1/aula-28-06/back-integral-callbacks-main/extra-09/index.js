const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];

const programadorMaiorQue20 = pessoas.filter(x => x.profissao === 'Programador' && x.idade > 20);

console.log(`programadores maiores de 20 anos:`);
console.log(programadorMaiorQue20);


const jornalistarMaiorQue30 = pessoas.filter(x => x.profissao === 'Jornalista' && x.idade > 30);

console.log(`Jornalistas com mais de 30 anos:`);
console.log(jornalistarMaiorQue30);


const jornalista_programador_jovem = pessoas.filter(x => (x.profissao === 'Jornalista' || x.profissao === 'Programador') && x.idade < 30);

console.log(`jornalistas e programadores jovens:`);
console.log(jornalista_programador_jovem);