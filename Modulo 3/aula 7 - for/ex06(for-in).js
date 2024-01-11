let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5

for(let cont = 0; cont < produtos.length; cont++){
    let produto = produtos[cont]

    for(let dados in produto){

        if(dados == "preco"){

            let novo_preco = produto[dados] - desconto
            console.log("preço atualixado: R$"+novo_preco+",00")
            
        }  else{
            console.log(dados+": "+produto[dados])
        }
    }
    console.log("\n")
}