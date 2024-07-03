import {retornaIntensidade, retornaHemisferio} from './funcoesLogicas.js';

function imprimirChuvasMeteoros(chuvasMeteorosHoje, chuvaMeteorosDoisMeses){
    let quantChuvas = chuvasMeteorosHoje.length;
    let tabecalho = "NOME DA CHUVA".padEnd(27, ' ') + " - INTENSIDADE".padEnd(11, ' ') + " - HEMISFÉRIO".padEnd(10, ' ') + " - PERÍODO";

    if(chuvasMeteorosHoje.length == 0){
        console.log("Não há chuva de meteoros passando hoje");
    } else if(chuvasMeteorosHoje.length >= 1){
        console.log(`Encontramos ${quantChuvas} chuvas de meteoros que podem ser vistas hoje\n`);
        console.log(tabecalho);
    }

    chuvasMeteorosHoje.forEach(retonaChuvaFormatada);

    console.log("\n\nNão perca as próximas chuvas de meteoros:\n");
    console.log(tabecalho);

    chuvaMeteorosDoisMeses.forEach(retonaChuvaFormatada);
}

function retonaChuvaFormatada(chuva){
    let nome = chuva.nome;
    let intensidade = retornaIntensidade(chuva.intensidade);
    let hemisferio = retornaHemisferio(chuva.declinacao);
    let periodo = chuva.inicio + " à " + chuva.fim;

    console.log(nome.padEnd(27, ' ') +  " - " + intensidade.padEnd(11, ' ') + " - " + hemisferio.padEnd(10, ' ') + " - " + periodo);
}

export default imprimirChuvasMeteoros;