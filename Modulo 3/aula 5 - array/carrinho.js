const produto = {
    nome: 'New Super Mario Bros', qnt: 1, valor:250
}

const carrinho = [
    {nome: 'The Legen of Zelda', qnt: 1, valor: 250},
    {nome: 'Super Mario Kart 8', qnt: 1, valor: 300}
]

carrinho.push(produto)

carrinho.splice(0,1)

console.log(carrinho)