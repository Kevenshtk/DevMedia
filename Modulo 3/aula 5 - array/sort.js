// ORDENANDO NÚMEROS
const numeros = [10,1,2];

console.log("\nArray antes da ordenação:\n");
console.info(numeros);

function ordenaNumeros(a, b){
    return a - b;
}

numeros.sort(ordenaNumeros);

console.log("\nArray depois da ordenação:\n");
console.info(numeros);
console.log("\n");


// ORDENANDO OBJETOS
let alunos = [
    {nome: 'Juliana', matricula: 132},
    {nome: 'Marina', matricula: 245},
    {nome: 'Gustavo', matricula: 58},
    {nome: 'Augusto', matricula: 359}
]

function ordenaMatricula(a, b){
    return a.matricula - b.matricula
}

console.log("\nArray antes da ordenação:\n");
console.info(alunos);

numeros.sort(ordenaMatricula);

console.log("\nArray depois da ordenação:\n");
console.info(alunos);
console.log("\n")


// EXEMPLO PRÁTICO

let tabela = [
    {equipe: 'Time Azul', pontos: 25 },
    {equipe: 'Time Verde', pontos: 47 },
    {equipe: 'Time Amarelo', pontos: 39 },
    {equipe: 'Time Vermelho', pontos: 16 },
];

function ordenaTime(a, b){
    return b.pontos - a.pontos
}

tabela.sort(ordenaTime)

for(let i = 0; i < tabela.length; i++){
    let posicao = i+1;
    console.log(posicao+" | "+tabela[i].equipe+" - "+tabela[i].pontos+" pts");
}