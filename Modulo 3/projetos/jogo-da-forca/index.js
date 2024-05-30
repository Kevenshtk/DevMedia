import entrada from 'readline-sync'
import listaFruta from './dados.js'
import {validarLetraDigitada, atualizarPalavraOculta, exibirMesagemFinal} from './funcoes.js'

console.log("--------------- JOGO DA FORCA ---------------")
let statusJogo = 'andamento'
let chance = 4
let palavra = listaFruta[Math.floor(Math.random(0, 1) * listaFruta.length)]
let primeiraLetra = palavra[0]
let underline = "_".repeat(palavra.length - 1)
let palavraOculta = primeiraLetra + underline
let palavraAtualizada
console.log('Fruta: ' +palavraOculta)

let letraDigitada = entrada.question("Digite uma letra: ")
let letraValida = validarLetraDigitada(letraDigitada)

while(statusJogo === 'andamento'){
    while(letraValida != true){
        console.log('Por favor, digite uma letra válida\n')

        letraDigitada = entrada.question("Digite uma letra: ")
        letraValida = validarLetraDigitada(letraDigitada)
    }

    palavraAtualizada = atualizarPalavraOculta(palavraOculta, letraDigitada, palavra)
    
    if(palavraAtualizada == palavraOculta){
        chance--
        console.log(`OPÇÃO ERRADA! Você ainda tem ${chance} chance(s)!`)
        
        if(chance == 0){
            statusJogo = 'perdeu'
            break
        } 
    }

    if(palavra === palavraAtualizada){
        statusJogo = 'venceu'
        break
    }

    console.log('\nFruta: '+palavraAtualizada)
    letraDigitada = entrada.question("Digite uma letra: ")
    palavraOculta = palavraAtualizada
}

exibirMesagemFinal(statusJogo, palavra)