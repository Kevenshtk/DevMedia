import entrada from 'readline-sync'

let colecaoDados = [
    {salario: 510,    inflacao: 5.91,   ano: 2010},
    {salario: 545,    inflacao: 6.50,   ano: 2011},
    {salario: 622,    inflacao: 5.8,    ano: 2012},
    {salario: 678,    inflacao: 5.9,    ano: 2013},
    {salario: 724,    inflacao: 6.41,   ano: 2014},
    {salario: 788,    inflacao: 10.67,  ano: 2015},
    {salario: 880,    inflacao: 6.29,   ano: 2016},
    {salario: 937,    inflacao: 2.95,   ano: 2017},
    {salario: 954,    inflacao: 2.95,   ano: 2018},
    {salario: 998,    inflacao: 4.31,   ano: 2019},
    {salario: 1045,   inflacao: 4.52,   ano: 2020}
]

console.log("Escolha uma das alternativas: \n")
console.log("1 - Listar os salários minímos de 2010 à 2020")
console.log("2 - Listar o índice IPCA de 2010 à 2020")
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA \n")

const opt = entrada.question("Digite o numero da sua escolha: ")

switch(opt){
    case "1":
        for(let dadosSalario of colecaoDados){
            let salario = dadosSalario.salario
            let ano = dadosSalario.ano
            
            console.log("\n")
            console.log("Ano: ".padEnd(30,".") + ano)
            console.log("Salário mínimo: ".padEnd(30,".") +"R$ "+ salario +",00")
        }
    break

    case "2":
        for(let dadosInflacao of colecaoDados){
            let inflacao = dadosInflacao.inflacao
            let ano = dadosInflacao.ano

            console.log("\n")
            console.log("Ano: ".padEnd(30,".") + ano)
            console.log("Inflação IPCA: ".padEnd(30,".") + inflacao.toFixed(2).replace(".", ",") +"%")
        }
    break

    case "3":
        let crescimentoSalarial = 0
        let salarioAnterior = 0
        let salarioAtual = 0

        for(let dados of colecaoDados){
            let salario = dados.salario
            let inflacao = dados.inflacao
            let ano = dados.ano
            
            if(ano == "2010"){
                salarioAnterior = salario
            } else {
                salarioAtual = salario

                let diferenca = salarioAtual - salarioAnterior
                crescimentoSalarial = (diferenca / salarioAnterior) * 100

                salarioAnterior = salarioAtual
            }

            console.log("\n")
            console.log("Ano: ".padEnd(30,".") + ano)
            console.log("Salário mínimo: ".padEnd(30,".") +"R$ "+ salario +",00")
            console.log("Crescimento Salarial: ".padEnd(30,".") + crescimentoSalarial.toFixed(2).replace(".", ",") +"%")
            console.log("Inflação IPCA: ".padEnd(30,".") + inflacao.toFixed(2).replace(".", ",") +"%")
        }
    break

    default:
        console.log("Opção Inválida!")
    break
}