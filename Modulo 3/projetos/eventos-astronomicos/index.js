import colecaoChuvasDeMeteoros from './dados/chuvaMeteoros.js';
import {retornaChuvaMeteorosHoje, retornaChuvaMeteorosDoisMeses} from './funcoes/funcoesLogicas.js';
import imprimirChuvasMeteoros from './funcoes/funcoesExibicao.js';

let data = new Date("2024/12/29");
let dataHoje = new Date(data);
let mesAtual = data.getMonth();
let dataProximoDoisMeses = new Date(data.setMonth(mesAtual + 2));

const chuvasMeteorosHoje = colecaoChuvasDeMeteoros.filter((chuvas) => {
    return retornaChuvaMeteorosHoje(chuvas, dataHoje);
});

const chuvaMeteorosDoisMeses = colecaoChuvasDeMeteoros.filter((chuvas) => {
    return retornaChuvaMeteorosDoisMeses(chuvas, dataHoje, dataProximoDoisMeses);
});

console.log('Chuva de meteoros\n');

imprimirChuvasMeteoros(chuvasMeteorosHoje, chuvaMeteorosDoisMeses);