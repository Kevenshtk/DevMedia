programa
{
	
	funcao inicio()
	{
		real num1, num2
		caracter operacao

		escreva("Mini calculadora\n\n")

		escreva("Digite o primeiro número: ")
		leia(num1)
		escreva("Digite o segungo número: ")
		leia(num2)

		escreva("\nEscolha a operação que deseja efetuar:\n\n")

		escreva("+ - Soma\n")
		escreva("- - Subtração\n")
		escreva("* - Multiplicação\n")
		escreva("/ - Divisão\n")
		leia(operacao)

		escreva("\nVocê escolheu a operação: "+operacao+"\n")
		escreva("\nResultado: "+num1+" "+operacao+" "+num2+" = ")

		se(operacao=='+')
	    {
	      escreva(num1 + num2)
	    }
	    senao se(operacao=='-')
	    {
	      escreva(num1 - num2)
	    }
	    senao se(operacao=='*')
	    {
	       escreva(num1 * num2)
	    }
	    senao se(operacao=='/')
	    {
		      se(num2 > 0)
		      {
		        escreva(num1 / num2)
		      }
		      senao
		      {
		        escreva("Não é possível dividir por 0")
		      }
	    }
	    senao
	    {
	      escreva("Operação inválida")
	    }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 916; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */