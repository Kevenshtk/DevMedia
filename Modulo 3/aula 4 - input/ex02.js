import entradaDados from 'readline-sync'

console.log('Conversor de Celsius para Kelvin \n')

let celsius = entradaDados.question('Informe o valor em Celsius: ')
let kelvin = Number(celsius) + 273.15

console.log(celsius+' ºC equivale a '+kelvin+'K')