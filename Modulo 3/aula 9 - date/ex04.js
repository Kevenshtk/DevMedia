const dataUltimoAcesso = new Date('2024/02/24 16:00:00')
const dataAtual = new Date()

const diferencaTime = dataAtual.getTime() - dataUltimoAcesso.getTime()

const milissegundosHora = 1000 * 60 * 60;
const milissegundosDia = milissegundosHora * 24

const hora = dataAtual.getHours()
let msg = ""

if(hora >= 6 &&  hora < 12){
    msg = "Bom dia\n"
} else if(hora < 6 || hora >= 18){
    msg = "Boa noite\n"
} else {
    msg = "Boa tarde\n"
}

if(diferencaTime > milissegundosDia){
    msg+= "Voce esta ausente ha dias !!!"
} else if(diferencaTime > milissegundosHora){
    msg+= "Voce esta ausente ha horas !!!"
} else {
    msg+= "Que bm que ainda esta aqui !"
}

console.log(msg)