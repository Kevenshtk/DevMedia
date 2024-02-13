import entrada from 'readline-sync'

console.log("Triângulo\n")

let lado1 = entrada.question("Informe o primeniro lado do trângulo: ")
let lado2 = entrada.question("\nInforme o segundo lado do trângulo: ")
let lado3 = entrada.question("\nInforme o terceiro lado do trângulo: ")

Number(lado1)
Number(lado2)
Number(lado3)

if((lado1 < lado2+lado3) && (lado2 < lado1+lado3) && (lado3 < lado1+lado2)){
    
    if(lado1 == lado2 && lado1 == lado3){

        console.log("\ntriângulo equilátero")

    } else if(lado1 != lado2 && lado1 != lado3){

        console.log("\ntriângulo escaleno")

    } else {

        console.log("\ntriângulo isósceles")
        
    }

} else {
    console.log("\nNão é um triângulo")
}