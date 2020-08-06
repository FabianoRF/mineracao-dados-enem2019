const fs= require('fs')
const csv = require('fast-csv');
const {escreveDados, filtraDados, escreveCabecalho} = require('./helpers/dataHelper')
const {transformaCursandoEnsinoMedio, transformaNotas, transformaRenda, trasformaTipoEscola, trasformaIdadeClasses} = require("./helpers/transformarDados.js")


function inicia(){
    //escreve o cabeçalho
    escreveCabecalho()

    //inicia a leitura
    fs.createReadStream('enem_simplificado.csv')
    .pipe(csv.parse({ 
        headers: true,
        delimiter: ';'
    }))
    .on('error', error => console.error(error))
    .on('data', data => {
        //aqui cada linha é retornado um objeto
        const dadosFiltrados = filtraDados(data)
        const {
            NU_IDADE, 
            NU_NOTA_CN, 
            NU_NOTA_CH, 
            NU_NOTA_REDACAO, 
            NU_NOTA_LC, NU_NOTA_MT, 
            TP_ST_CONCLUSAO, 
            TP_ESCOLA,
            Q005, 
            Q006
        } = dadosFiltrados
        
        const dadosTransformados = {}
        
        dadosTransformados.anoConclusao = transformaCursandoEnsinoMedio(TP_ST_CONCLUSAO)
        dadosTransformados.mediaNotas = transformaNotas(
            NU_NOTA_CN, 
            NU_NOTA_CH, 
            NU_NOTA_REDACAO, 
            NU_NOTA_LC, 
            NU_NOTA_MT
        )
        dadosTransformados.renda = transformaRenda(Q005, Q006)
        dadosTransformados.tipoEnsino = trasformaTipoEscola(TP_ESCOLA)
        dadosTransformados.idade = trasformaIdadeClasses(NU_IDADE)
        
        escreveDados(dadosTransformados)
        }
    )
    .on('end', rowCount => console.log(`Lidas ${rowCount} linhas`));
}



inicia();