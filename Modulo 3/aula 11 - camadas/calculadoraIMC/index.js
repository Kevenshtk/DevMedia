// camada de exibição

import {validaPeso, validaAltura} from './validacaoPesoAltura.js'
import {calcularIMC, retornaStatusIMC} from './calculoIMC.js'

let peso = 70
let altura = 1.72

let verificarPeso = validaPeso(peso)
let verificarAltura = validaAltura(altura)

if(verificarPeso && verificarAltura){
let resultado = calcularIMC(peso, altura)
let statusIMC = retornaStatusIMC(resultado)

console.log("Seu IMC é " +resultado+ " e você está " +statusIMC)

} else {
    console.log("Peso e alutura devem ser maiores que zero")
}