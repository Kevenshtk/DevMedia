programa
{
	
	funcao inicio()
	{
		real c, f, conversao_c, conversao_f
		escreva("Convesor de temperatura\n\n")

		escreva("Digite uma temperatura em °C: ")
		leia(c)

		conversao_f = c * 1.8 + 32

		escreva("A temperatura convertida para Fahrenheit é: "+conversao_f+"°F\n\n")

		
		escreva("Digite uma temperatura em °F: ")
		leia(f)

		conversao_c = (f - 32) / 1.8

		escreva("A temperatura convertida para Celsiust é: "+conversao_c+"°C\n\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 280; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */