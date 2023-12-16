//If e as anomalias

/*let resposta = "";

if(resposta == 0){
    console.log("Resposta correta")
} else {
    console.log("Resposta incorreta")
}*/

let resposta = "";

if(resposta === 0){
    console.log("Resposta correta")
} else {
    console.log("Resposta incorreta")
}


//Ternário

//NORMAL

var status = nota > 7 ?"Aprovado" :"Reprovado";

//Mútiplas condições

//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica a condição e define o resultado na variável 'status_loja'
var status_loja = (dia_semana == 0 || dia_semana == 6) ? "Funcionamos apenas de Segunda à Sexta" : "Loja aberta";

//Imprime o resultado no console
console.log(status_loja);



//Curto-circuito

//NORMAL

/*var aprovado = true;

if (aprovado) {
    console.log("Parabéns");
}*/


//Curto-circuito
var aprovado = true;

aprovado && console.log("Parabéns");

//Declaração da constante nome
const nome = 'Camila';

//Aqui é verificado se o nome possui ao menos um caractere
//Retorna true se possuir e false caso contrário
const nomeValido = nome.length > 0;

//Imprime o nome no console se for diferente de vazio
nomeValido && console.log(nome);


//Switch

//NORMAL

/*var produto = "Smartphone";

switch(produto)
{
    case "Smartphone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}*/


//MÚLTIPLAS CLÁUSULAS CASE

/*var produto = "Smartphone";

switch(produto)
{
    case "Smartphone":
    case "Celular":
    case "Telefone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}*/

var mes = "Janeiro";

switch(mes)
{
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido");
}