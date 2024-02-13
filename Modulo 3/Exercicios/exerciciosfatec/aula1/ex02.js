import entrada from 'readline-sync'

console.log("Algoritmo que calcula o aumento de 25% no salário\n")

let salarioAtual = entrada.question("Insira seu salário atual: $")

let salarioNovo = salarioAtual * 1.25

console.log("\nSeu novo salário é: $" + salarioNovo)