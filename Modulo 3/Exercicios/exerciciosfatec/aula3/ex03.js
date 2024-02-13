import entrada from 'readline-sync'

console.log("\nCompanhia de Seguros")

let idade = entrada.question("Informe sua idade: ")
let grupo = entrada.question("Informe seu grupo de risco B, M ou A: ")
let num_grupo = 0

if(idade < 18 || idade > 70){

    console.log("Você não pode adquirir o seguro.")

} else if(idade <= 24 && grupo == "B"){

    num_grupo = 7

} else if(idade <= 24 && grupo == "M"){

    num_grupo = 8

} else if(idade <= 24 && grupo == "A"){

    num_grupo = 8

} else if(idade <= 40 && grupo == "B"){

    num_grupo = 4

} else if(idade <= 40 && grupo == "M"){

    num_grupo = 5
 
} else if(idade <= 40 && grupo == "A"){

    num_grupo = 6

} else if(idade <= 70 && grupo == "B"){

    num_grupo = 1

} else if(idade <= 70 && grupo == "M"){

    num_grupo = 2

} else if(idade <= 70 && grupo == "A"){

    num_grupo = 3

}

console.log(`Idade: ${idade}; Grupo: ${grupo}; Número grupo: ${num_grupo}.`)