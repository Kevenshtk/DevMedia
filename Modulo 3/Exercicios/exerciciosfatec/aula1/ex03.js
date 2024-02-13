import entrada from 'readline-sync'

console.log("Algoritmo que converte graus farenheit em centigrados\n")

let graus_f = entrada.question("Digite a temperatura em farenheit: ")
let graus_c = 5 * (graus_f - 32) / 9

console.log("\nA temperatura em graus centigrados é: " + graus_c.toFixed(2))