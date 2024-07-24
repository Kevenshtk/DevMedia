import entrada from 'readline-sync'

console.log('Aplicacao de Juros \n')

let valor = entrada.question('Informe o valor devido: R$ ')

if(valor != 0){
    let dia_venc = entrada.question('Informe quantos dias se passaram desde o vencimento do boleto: ')
    
    if(dia_venc >= 1){
        let taxa_j = 0
        let valor_j = 0

        if(dia_venc > 15){
            taxa_j = 10
            valor_j = Number(valor) + (valor * (taxa_j / 100))
        } else {
            taxa_j = 5
            valor_j = Number(valor) + (valor * (taxa_j / 100))
        }
        
        console.log('Valor original da divida: R$ '+valor)
        console.log('Dias atrasados: '+dia_venc)
        console.log('Taxa de Juros: '+taxa_j+'%')
        console.log('Valor total com juros: R$ '+valor_j)

    } else {
        console.log('Voce esta em dia !')
    }

} else {
    console.log('O valor da divida deve ser maior que zero !')
}