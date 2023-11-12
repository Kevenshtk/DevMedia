programa
{
	
	funcao inicio()
	{
		inteiro tentativas = 3
		cadeia login, senha
		
		escreva("Sistema de Login\n\n")

		enquanto(tentativas != 0){
			escreva("Digite seu login: ")
			leia(login)
			escreva("Digite sua senha: ")
			leia(senha)
			se(login == "admin" e senha == "123456"){
					escreva("Login realizado com sucesso")
					pare
				} senao {
					tentativas--
					escreva("\nVocê tem mais "+tentativas+" tentativas\n\n")
				}
			se(tentativas == 0){
				escreva("\nNúmero de tentativas foi execido.")
				escreva("\nConta bloqueada.")
				}
			}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 346; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */