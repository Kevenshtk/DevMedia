import entrada from 'readline-sync'

let dia = entrada.question("Digite o dia: ")
let mes =  entrada.question("\nDigite o mês: ")
let ano = entrada.question("\nDigite o ano: ")

if((dia >=1 && dia <= 31) && (mes >=1 && mes <=12) && (ano >=2000 && ano <=2024)){
    console.log("\nData válida")
} else {
    console.log("\nData inválida")
}