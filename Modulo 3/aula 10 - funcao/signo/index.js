import colecao_signos from "./dados.js"
import retorna_signo from "./funcoes.js"


let data_app = new Date("2024-12-23")

const nome_signo = retorna_signo(colecao_signos, data_app)

console.log("O signo de hoje é: "+nome_signo)