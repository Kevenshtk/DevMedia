import colecaoDados from '../dados/dados.js';

function exibirOpcaoListagem(opt){

    switch(opt){
        case "1":
            for(let dadosSalario of colecaoDados){
                let salario = dadosSalario.salario;
                let ano = dadosSalario.ano;
                
                console.log("\n");
                console.log("Ano: ".padEnd(30,".") + ano);
                console.log("Salário mínimo: ".padEnd(30,".") +"R$ "+ salario +",00");

            }

        break;
    
        case "2":
            for(let dadosInflacao of colecaoDados){
                let inflacao = dadosInflacao.inflacao;
                let ano = dadosInflacao.ano;

                console.log("\n");
                console.log("Ano: ".padEnd(30,".") + ano);
                console.log("Inflação IPCA: ".padEnd(30,".") + inflacao.toFixed(2).replace(".", ",") +"%");
            }

        break
    
        case "3":
            let crescimentoSalarial = 0;
            let salarioAnterior = 0;
            let salarioAtual = 0;
    
            for(let dados of colecaoDados){
                let salario = dados.salario;
                let inflacao = dados.inflacao;
                let ano = dados.ano;
                
                if(ano == "2010"){
                    salarioAnterior = salario;
                } else {
                    salarioAtual = salario;
    
                    let diferenca = salarioAtual - salarioAnterior;
                    crescimentoSalarial = (diferenca / salarioAnterior) * 100;
    
                    salarioAnterior = salarioAtual;
                }
    
                console.log("\n");
                console.log("Ano: ".padEnd(30,".") + ano);
                console.log("Salário mínimo: ".padEnd(30,".") +"R$ "+ salario +",00");
                console.log("Crescimento Salarial: ".padEnd(30,".") + crescimentoSalarial.toFixed(2).replace(".", ",") +"%");
                console.log("Inflação IPCA: ".padEnd(30,".") + inflacao.toFixed(2).replace(".", ",") +"%");
            }

        break;
    
        default:
            console.log("Opção Inválida!")
        break;
    }
}

export default exibirOpcaoListagem;