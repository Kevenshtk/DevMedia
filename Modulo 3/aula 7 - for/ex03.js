let notas = [7, 8, 6, 5]
let media = 0

for(let cont = 0; cont < notas.length; cont++){
    media = media + notas[cont]
}

cont = notas.length
media = media / cont

if(media >= 6){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}
