import retornaDiaSemana from './diaSemana.js'

let serie = ['Smallville', 'WandaVision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC Legends']

function retornaSerieDia(){
    let diaSemana = retornaDiaSemana()
    return serie[diaSemana]
}

export default retornaSerieDia