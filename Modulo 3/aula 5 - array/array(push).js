const diasDaSemana = [
    "domingo",
    "segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira"
]

diasDaSemana.push("Sábado") //adiciona um elemento
diasDaSemana.splice(2,1) //remove um elemento (2(posicao_inicia), 1(quant vão ser removidos))
diasDaSemana.pop() //remove o último elemento
diasDaSemana.shift() //remove o primeiro elemento

console.log(diasDaSemana)