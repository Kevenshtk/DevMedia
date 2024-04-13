const retorna_media = (nota_1, nota_2) =>{
    
    let media = (nota_1 + nota_2) / 2
    return media;

}

let media_aluno = retorna_media(9, 8)
console.log("A media do aluno é: " +media_aluno)


// REDUÇÃO
/* const retorna_media = (nota_1, nota_2) => (nota_1 + nota_2) / 2 */