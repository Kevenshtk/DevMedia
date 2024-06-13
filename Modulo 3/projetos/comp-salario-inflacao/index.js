import entrada from 'readline-sync';
import exibirOpcaoListagem from './exibicao/exibirOpcao.js';

console.log("Escolha uma das alternativas: \n");
console.log("1 - Listar os salários minímos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA \n");

const opt = entrada.question("Digite o numero da sua escolha: ");

exibirOpcaoListagem(opt);