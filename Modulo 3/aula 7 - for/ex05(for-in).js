let carro = {nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020}

let desconto = 5

for(let dados in carro){

    if(dados == "preco"){

        let preco_d = carro[dados] - ((carro[dados] * desconto) / 100)
        console.log("novo preço: R$"+preco_d+",00")

    } else {
        console.log(dados+ ": "+carro[dados])
    }

}