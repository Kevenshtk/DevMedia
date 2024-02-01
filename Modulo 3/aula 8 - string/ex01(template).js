let liguagem = "JavaScript"
let stack = "front-end"

switch(stack){
    case "back-end":
        console.log(`Estude Node.js para programação ${stack} em ${liguagem}`)
        break

    case "front-end":
        console.log(`Estude React para programação ${stack} em ${liguagem}`)
        break

    case "back-end":
        console.log(`Estude React Native para programação ${stack} em ${liguagem}`)
        break

    default:
        console.log(`Tecnologia indisponível para ${stack}`)
        break
}