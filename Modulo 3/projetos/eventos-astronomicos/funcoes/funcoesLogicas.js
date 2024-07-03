function retornaChuvaMeteorosHoje(ChuvasDeMeteoros, dataHoje){
    let anoAtual = dataHoje.getFullYear();

    let chuvaMeteorosInicio = new Date(anoAtual + '/' + ChuvasDeMeteoros.inicio);
    let chuvaMeteorosFim = new Date(anoAtual + '/' + ChuvasDeMeteoros.fim);

    let mesInicio = chuvaMeteorosInicio.getMonth();
    let mesFim = chuvaMeteorosFim.getMonth();
        
    if(mesInicio > mesFim){
        chuvaMeteorosFim.setFullYear(anoAtual + 1);
    }

    if(dataHoje >= chuvaMeteorosInicio && dataHoje <= chuvaMeteorosFim){
        inverterData(ChuvasDeMeteoros, ChuvasDeMeteoros.inicio, ChuvasDeMeteoros.fim);
        retornaIntensidade(ChuvasDeMeteoros.intensidade);
        retornaHemisferio(ChuvasDeMeteoros.declinacao);

        return ChuvasDeMeteoros;
    }
}

function retornaChuvaMeteorosDoisMeses(ChuvasDeMeteoros, dataHoje, dataProximoDoisMeses){
    let dataAtual = new Date(dataHoje)
    let anoAtual = dataHoje.getFullYear();
    let chuvaMeteorosInicio = new Date(anoAtual + '/' + ChuvasDeMeteoros.inicio);
    let mesInicioChuva = chuvaMeteorosInicio.getMonth();

    if(dataAtual > mesInicioChuva){
        chuvaMeteorosInicio.setFullYear(anoAtual + 1);
    }

    if(dataAtual < chuvaMeteorosInicio && chuvaMeteorosInicio < dataProximoDoisMeses){
        inverterData(ChuvasDeMeteoros, ChuvasDeMeteoros.inicio, ChuvasDeMeteoros.fim);
        retornaIntensidade(ChuvasDeMeteoros.intensidade);
        retornaHemisferio(ChuvasDeMeteoros.declinacao);

        return ChuvasDeMeteoros;
    }
}


function inverterData(ChuvasDeMeteoros, dataInicio, dataFim){
    let dataInicioInvertida = dataInicio.split("/");
    let dataFimInvertida  = dataFim.split("/");

    dataInicioInvertida = dataInicioInvertida[1] + "/" + dataInicioInvertida[0];
    dataFimInvertida = dataFimInvertida[1] + "/" + dataFimInvertida[0];

    ChuvasDeMeteoros.inicio = dataInicioInvertida;
    ChuvasDeMeteoros.fim = dataFimInvertida;

}

export function retornaIntensidade(intensidade){
    let tiposIntensidades = ["Fraca", "Média", "Forte"]; 

    if(intensidade.indexOf(tiposIntensidades[0]) > -1){
        return "1 (Fraca)";
    } else if(intensidade.indexOf(tiposIntensidades[1]) > -1){
        return "2 (Média)";
    } else if(intensidade.indexOf(tiposIntensidades[2]) > -1){
        return "3 (Forte)";
    } else {
        return "(Irregular)";
    }
}

export function retornaHemisferio(declinacao){
    if(declinacao >= 0 ){
        return "Norte";
    } else {
        return "Sul";
    }
}

export {retornaChuvaMeteorosHoje, retornaChuvaMeteorosDoisMeses};