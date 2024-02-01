let email_acesso = "pedro@gmail.com"

let email_cadastrado = "PEDRO@gmail.com"

if(email_acesso.toLowerCase() == email_cadastrado.toLowerCase()){
    console.log("Foi enviado um link de ativação para seu email")
} else {
    console.log("Esse email não existe em nossa base de dados")
}