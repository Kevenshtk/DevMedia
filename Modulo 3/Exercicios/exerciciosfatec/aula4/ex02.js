import input from 'readline-sync'

let anonNasc = input.question("Digite seu ano de nascimento: ")
let anoAtual = new Date ()
let idade = anoAtual.getFullYear() - anonNasc

if(idade >= 18){
    console.log(`\nVocê tem ${idade} anos, pode votar e ter CNH`)
} else if(idade >= 16 && idade < 18){
    console.log(`\nVocê tem ${idade} anos, pode votar`)
} else {
    console.log(`Você tem ${idade} anos apenas`)
}