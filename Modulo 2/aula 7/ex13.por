programa
{
	funcao inicio ()
	{
		inteiro num
		inteiro cont = 0
		inteiro result

		escreva("Algoritmo de tabuada\n\n")
		escreva("Informe um número: ")
		leia(num)
		
		enquanto (cont <= 10){
			result = num * cont
			escreva("\n"+cont+" X "+num+" = "+result)
			cont++
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 113; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */