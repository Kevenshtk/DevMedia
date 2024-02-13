import entrada from 'readline-sync'

let arrayProduto = [" ", " "]
let arrayPreco = [0, 0]

for(let i = 0; i < 2; i++){

    arrayProduto[i] = entrada.question("\nDigite o nome do produto: ")
    
    arrayPreco[i] = entrada.question("\nDigite o preço do produto: R$")
    
}

let totalCompra = Number(arrayPreco[0]) + Number(arrayPreco[1])
let totalDesconto = totalCompra - (totalCompra * 0.20)

console.log(`\nO produto 1, ${arrayProduto[0]}, seu valor é R$ ${arrayPreco[0]}`)
console.log(`\nO produto 2, ${arrayProduto[1]}, seu valor é R$ ${arrayPreco[1]}`)
console.log(`\nO total da compra é R$ ${totalCompra} com o desconto fica R$ ${totalDesconto}`)