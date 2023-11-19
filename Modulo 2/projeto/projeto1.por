programa
{
	
	funcao inicio()
	{
		real valor, porcen_user, porcen, result_des, result_juro
		
		escreva("Calculadora de juros e descontos\n\n")
		
		escreva("Informe o valor: ")
		leia(valor)

		escreva("\nInforme a porcentagem: ")
		leia(porcen_user)

		porcen = valor * (porcen_user / 100)
		result_des = valor - porcen
		result_juro = valor + porcen

		escreva(valor+" com "+porcen_user+"% de desconto é "+result_des+"\n")
		escreva(valor+" com "+porcen_user+"% de juros é "+result_juro+"\n\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 65; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */