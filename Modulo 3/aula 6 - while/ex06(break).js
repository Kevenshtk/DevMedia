let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "João", habilitado: false},
    {id: 3, nome: "Paulo", habilitado: false},
    {id: 4, nome: "Lucas", habilitado: false},
    {id: 5, nome: "Ana", habilitado: true}
]

let cont = 0

do{
    let funcionario = funcionarios[cont]

    if(funcionario.habilitado == true){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome)
        break
    }

    cont++

}while(cont <= funcionarios.length)