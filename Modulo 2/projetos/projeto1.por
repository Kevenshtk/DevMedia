programa
{
	
	funcao inicio()
	{
		real valor, porcenUser, porcen, resultDes, resultJuro

		escreva("Calculadora de juros e descontos\n\n")

		escreva("Informe o valor: ")
		leia(valor)

		escreva("Informe a porcentagem: ")
		leia(porcenUser)

		porcen = valor * (porcenUser / 100)
		resultDes = valor - porcen
		resultJuro = valor + porcen

		escreva(valor+ " com "+porcenUser+"% de desconto fica "+resultDes+"\n")
		escreva(valor+" com "+porcenUser+"% de juros fica "+resultJuro+"\n\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 243; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */