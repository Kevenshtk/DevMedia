function fimJogo(pontuacaoFinal, nome){
    let mensagem = '';

  if(pontuacaoFinal <= 3){
    mensagem = 'OH NÃO! Tente mais uma vez.';

  } else if(pontuacaoFinal <= 6){
    mensagem = 'BOM TRABALHO! Pratique um pouco mais.';

  } else if(pontuacaoFinal <= 9){
    mensagem = 'MUITO BOM! Você acertou a maioria.';
    
  } else {
    mensagem = 'EXCELENTE! Você é um verdadeiro expert.';
  }

    console.log("\nJogador(a): " +nome);
    console.log("Pontuação final: "+ pontuacaoFinal +" acertos.");
    console.log(mensagem);
}

export default fimJogo;