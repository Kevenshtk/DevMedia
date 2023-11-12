programa
{
	funcao inicio ()
	{
		inteiro total_lugar = 20, quant_ingresso
		
		escreva("Venda de ingresso\n")
		escreva("Ingresso disponiveis "+total_lugar+"\n\n")
		
		enquanto(total_lugar != 0){
			escreva("Quantos ingresso voce deseja: ")
			leia(quant_ingresso)
			
			se(quant_ingresso > total_lugar){
				escreva("\nValor digitado maior que total de lugares disponiveis\n")
			} senao {
			escreva("Voce comprou "+quant_ingresso+" ingresso(s)\n")
			
			total_lugar = total_lugar - quant_ingresso
			
			se(total_lugar == 0){
				escreva("\nNao a mais lugares diponiveis")
			} senao {
				escreva("Possuem "+total_lugar+" lugares disponiveis\n\n")
			}
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 674; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */