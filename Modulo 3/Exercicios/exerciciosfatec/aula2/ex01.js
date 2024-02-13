import entrada from 'readline-sync'

let salario = entrada.question("Informe o salário mínimo: R$")
let quilowatts = entrada.question("\nInforme a quantidade de quilowatts gasto: ")

let valorQw = salario / 5
let valorTotal = valorQw * quilowatts
let valorDes = valorTotal - (valorTotal * 0.15)

console.log("\n O valor de cada quilowatt é R$" + valorQw)
console.log("\n O valor a ser pago é R$" + valorTotal)
console.log("\n O valor a ser pago com desconto de 15% é R$" + valorDes)