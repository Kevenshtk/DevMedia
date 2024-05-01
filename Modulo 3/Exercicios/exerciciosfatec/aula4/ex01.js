import input from 'readline-sync'

let altura = input.question("Informe sua altura: ")
let sexo = input.question("Informe seu sexo M-masculino, F-feminino: ")
let peso = 0

if(sexo == "M" || sexo == "m"){
    peso = 72.7 * altura - 58
    console.log(`\nSeu peso ideal é ${peso}`)
} else if(sexo == "F" || sexo == "f"){
    peso = 62.1 * altura - 44.7
    console.log(`\nSeu peso ideal é ${peso}`)
} else {
    console.log("\nopção inválida")
}