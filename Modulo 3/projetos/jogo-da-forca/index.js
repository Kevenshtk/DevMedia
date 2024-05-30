import entrada from 'readline-sync'
import dados from './dados.js'

console.log("--------------- JOGO DA FORCA ---------------")

let letra = entrada.question("Digite uma letra: ")
let palavra = dados(Math.floor(Math.random()))
console.log(palavra)