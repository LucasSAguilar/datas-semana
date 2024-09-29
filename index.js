const dataSelecionada = new Date(2024, 8, 26);
const listaBaseNomeDia = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];


function obterDiasDaSemana (){
    const diaDaSemanaSelecionado = dataSelecionada.getDay();
    const domingoDaSemanaSelecionada = new Date(dataSelecionada);
    domingoDaSemanaSelecionada.setDate(domingoDaSemanaSelecionada.getDate() - diaDaSemanaSelecionado)

    const listaDias = []
    for(let i = 0; i < 7; i++){
        const diaParaAdicionar = new Date(domingoDaSemanaSelecionada)
        diaParaAdicionar.setDate(domingoDaSemanaSelecionada.getDate() + i)
        const infosDia = {
            diaSemana: listaBaseNomeDia[i],
            diaMes: diaParaAdicionar.toLocaleDateString()
        }
        listaDias.push(infosDia)
        console.log(listaDias);
        
    }
    
}

obterDiasDaSemana()










