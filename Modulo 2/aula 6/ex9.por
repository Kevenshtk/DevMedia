programa
{
	
	funcao inicio()
	{
		real Celsius, Fahrenheit
		inteiro opt

		escreva("Conversor de Temperatura\n\n")

		escreva("1) Celsius para Fahrenheit\n")
  		escreva("2) Fahrenheit para Celsius\n\n")
  		leia(opt)

  		escolha(opt){
  			caso 1:
  				escreva("\nDigite o valor em Celsius (°C): ")
  				leia(Celsius)
  				Fahrenheit = (Celsius * 1.8) + 32
  				escreva(Celsius+" °C equivale a "+Fahrenheit+" °F")
			pare
			
  			caso 2:
  				escreva("\nDigite o valor em Fahrenheit (°F): ")
				leia(Fahrenheit)
				Celsius = (Fahrenheit - 32) / 1.8
				escreva(Fahrenheit+" °F equivale a "+Celsius+" °C")
  			pare

  			caso contrario:
  				escreva("\nOpção inválida")
  			pare
  		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 692; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */