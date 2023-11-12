programa
{
	
	funcao inicio()
	{
		inteiro num, cont = 1, result
		
		escreva("Divisíveis\n\n")
		
		escreva("Informe qualquer número: ")
		leia(num)
		
		enquanto(num  >= cont){
			se(num % cont == 0){
			escreva(num+" é divisível por "+cont+"\n")
			}
			cont++
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 220; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */