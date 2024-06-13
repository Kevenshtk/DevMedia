import questoes from './dados.js';
import entradaDados from 'readline-sync';

function embaralhaQuestoes(){
    return questoes.sort(() => Math.random() - 0.5);
}

function selecionarQuestoes(quant){
    const questoesEmbaralhadas = embaralhaQuestoes();
    return questoesEmbaralhadas.slice(0, quant);
}

function exibirQuestoes(questoes){
    let pontos = 0;

    questoes.forEach((pergunta, index) => {
        console.log("\nPergunta "+ (index + 1) + ": " + pergunta.pergunta + " " + pergunta.resposta);
        let resposta = entradaDados.question("Ditige a resposta (ano): ");

        pontos = verificarResposta(resposta, pergunta.resposta, pontos);
     });

     return pontos;
}

function verificarResposta(resposta, respostaCerta, pontos){
    if(resposta == respostaCerta){
        console.log("Resposta correta!");
        return pontos += 1;
    } else {
        console.log("Resposta errada!");
    }
}

export {selecionarQuestoes, exibirQuestoes};