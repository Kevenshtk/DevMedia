function validarLetraDigitada(letraDigitada){
    if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)){
        return true
    } else {
        return false
    }
}

function atualizarPalavraOculta(palavraOculta, letraDigitada, palavra){
    let palavraOcultaArray = palavraOculta.split('')

    for(let i = 0; i < palavra.length; i++){
        if(letraDigitada === palavra[i]){
            palavraOcultaArray[i] = letraDigitada
        }
    }

    return palavraOcultaArray.join('')
}

function exibirMesagemFinal(statusJogo, palavra){
    let msg = ''

    if(statusJogo === 'perdeu'){
        msg = "\n--------------- VOCÊ PERDEU !! ---------------\n"
        return console.log(msg)

    } else {
        msg = "\n--------------- VITÓRIA !! ---------------"
        msg += `\n Você acertou o nome da fruta: ${palavra}\n`
        return console.log(msg)
    }
}

export {validarLetraDigitada, atualizarPalavraOculta, exibirMesagemFinal}