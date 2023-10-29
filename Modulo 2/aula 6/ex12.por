programa
{
	
	funcao inicio()
	{
		real a, b, c, result
		inteiro opt
		
		escreva("Informe o calculo desejado:\n\n")
		
		escreva("1) Calcular a área do triângulo\n")
		escreva("2) Calcular o delta usando a fórmula de bhaskara\n")

		leia(opt)

		se(opt == 1){
			escreva("Informe a base: ")
			leia(b)
			escreva("Informe a altura: ")
			leia(a)

			result = (b * a) / 2

			escreva("\nA área do triângulo é de: "+result)
		
		} senao se(opt == 2){
			escreva("Informe o valor de a: ")
			leia(a)
			escreva("Informe o valor de b: ")
			leia(b)
			escreva("Informe o valor de c: ")
			leia(c)

			result = b * b - 4 * a * c

			escreva("\n∆ = "+result)
		
		} senao {
			escreva("\nOpção Inválida")	
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 703; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */