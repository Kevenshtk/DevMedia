let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false},
];

for(let cont = 0; cont < funcionarios.length; cont++){
    
    let funcionario = funcionarios[cont]

    if(funcionario.habilitado == false){
        continue
    }

    console.log("Funcionário habilitado encontrado: " + funcionario.nome)
}