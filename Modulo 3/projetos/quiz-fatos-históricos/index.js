import entradaDados from 'readline-sync';
import {selecionarQuestoes, exibirQuestoes} from './servicosQuestoes.js';
import fimJogo from './pontuacao.js';

const quantPerguntas = 10;

const perguntasSelecionadas = selecionarQuestoes(quantPerguntas);

console.log("--------QUIZ DE FATOS HISTÓRICOS--------");
console.log("\nSeja Bem-vindo jogador(a)!\n");

const nome = entradaDados.question("Digite o seu nome: ");

let pontuacaoFinal = exibirQuestoes(perguntasSelecionadas);

fimJogo(pontuacaoFinal, nome);