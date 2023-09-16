programa
{
	
	funcao inicio()
	{
		cadeia nome, sobrenome, sexo
		inteiro idade
		real peso, altura
		logico termo
		
		escreva("Bem-vindo ao sistema de cadastro\n\n")
		
		escreva("Digite seu nome: ")
		leia(nome)
		
		escreva("Digite seu sobrenome: ")
		leia(sobrenome)

		escreva("Informe seu sexo: ")
		escreva("M = Masculino, F = Feninino, O = Outro \n")
		leia(sexo)

		escreva("Digite sua idade: ")
		leia(idade)

		escreva("Digite seu peso: ")
		leia(peso)

		escreva("Digite sua altura: ")
		leia(altura)


		escreva("Você aceita os termos de uso ?")
		escreva("verdade = sim, falso = não \n")
		leia(termo)

		escreva("\n\nSeus dados cadastrados\n\n")
		escreva("Nome: "+nome+" "+sobrenome+"\n")
		escreva("Sexo: "+sexo+"\n")
		escreva("Idade: "+idade+"\n")
		escreva("Peso: "+peso+"\n")
		escreva("Altura: "+altura+"\n")
		escreva("Aceitou os termos: "+termo+"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 606; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */