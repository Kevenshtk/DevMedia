let num = [10, 5, 7, 8, 9, 6, 12, 4]

let pares = 0
let impares = 0
let cont = 0

while(cont < num.length){
    if(num[cont] % 2 == 0){
        pares++
    } else {
        impares++
    }
    cont++
}

console.log("O total de números ímpares é: "+impares)
console.log("O total de números pares é: "+pares)