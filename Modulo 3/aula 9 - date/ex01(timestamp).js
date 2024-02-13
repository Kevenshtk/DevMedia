let dataAtual = new Date()
let dataPostagem = new Date('2024-02-06T00:00')

const timeAtual = dataAtual.getTime()
const timePostagem = dataPostagem.getTime()

const diferenca = timeAtual - timePostagem

const segundos = diferenca / 1000
const minutos = segundos / 60
const horas = minutos / 60

console.log(horas)