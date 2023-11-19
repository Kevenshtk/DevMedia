programa
{
	funcao inicio ()
	{
	inteiro opt
	real valor, result
	
	enquanto(opt != 3){
		escreva("\nCalculadora de conversoes: Escolha uma opcao:\n\n")
		escreva("1 - Celsius para Fhrenheit\n")
		escreva("2 - Quilometros para Milhas\n")
		escreva("3  -Sair\n\n")
		leia(opt)
		
		se(opt == 1){
			escreva("\n\nInforme o valor que deseja converter: ")
			leia(valor)
			result = (valor * 9)/5 + 32
			
			escreva(valor+"C equivale a "+result)
		} senao se (opt == 2){
			escreva("\n\nInforme o valor que deseja converter: ")
			leia(valor)
			result = valor / 3.6
			
			escreva(valor+"km/h equivale a "+result+" m/s")
		}
	}
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 632; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */