import entradaDados from 'readline-sync';
console.log('Conversor de Milhas para Quilômetros: \n ')

let milhas = entradaDados.question('Informe o valor em Milhas: ');
let km = milhas / 0.62137;

console.log(milhas+' é equivalente a ' +km+' km');