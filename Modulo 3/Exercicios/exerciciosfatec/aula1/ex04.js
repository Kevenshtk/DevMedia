import entrada from 'readline-sync'

console.log("Algoritmo que desconta 12.5% de um produto\n")

let valorProduto = entrada.question("Insira o valor do produto: $")


let valorProdutoDesconto =  valorProduto - (valorProduto * 0.125)

console.log("\nO valor com desconto é: $" + valorProdutoDesconto)