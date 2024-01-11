let capital_emprestado = 3000
let taxa_juros = 0.02

let cont = 1
let parcelas_totais = 5

while(cont <= parcelas_totais){
    let juros_emprestimo = capital_emprestado * taxa_juros * cont

    console.log("A taxa de juros no periodo de "+cont+" mes(es) é de R$"+juros_emprestimo+",00")

    cont++
}