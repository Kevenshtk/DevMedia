import entrada from 'readline-sync'

console.log("Algoritmo que calcula o valor do rendimento e o valor total depois do rendimento\n")

let saldo = entrada.question("Digite o saldo de uma aplicacao: ")
let taxa = entrada.question("\nDigite o valor da taxa de juros: ")

let rendimento = saldo * (taxa / 100)
let valor_total = saldo + rendimento

console.log("\nO valor do rendimento é: " + rendimento + "%")
console.log("\nO valor total depois do rendimento é: " + Number(valor_total).toFixed(2))