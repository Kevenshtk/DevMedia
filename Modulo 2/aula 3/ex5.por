programa
{
	
	funcao inicio()
	{
		cadeia nome_jogo, plataf
		inteiro num_copia
		real preco
		logico pre_venda
		
		escreva("Sistema de cadastro de jogos da loja \n\n")
		
		escreva("Digite o nome do jogo: ")
		leia(nome_jogo)
		escreva("Digite a plataforma do jogo: ")
		leia(plataf)
		escreva("Digite o número de cópias disponíveis: ")
		leia(num_copia)
		escreva("Digite o preço do jogo: R$")
		leia(preco)
		escreva("Produto em pré-venda? \nverdadeiro = Sim, falso = Não ")
		leia(pre_venda)

		escreva("\n\nResumo do jogo cadastrado\n")

		escreva("Jogo: "+nome_jogo+"\n")
		escreva("Plataforma: "+plataf+"\n")
		escreva("Unidades disponíveis: "+num_copia+"\n")
		escreva("Preço: R$"+preco+"\n")
		escreva("Pré-venda: "+pre_venda+"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 745; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */