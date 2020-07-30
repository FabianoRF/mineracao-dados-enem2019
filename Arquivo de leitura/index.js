const fs= require('fs')
const csv = require('fast-csv');
const {writeData, filterData, writeHeader} = require('./helpers/dataHelper')

//escreve o cabelçalho
writeHeader()

//inicia a leitura
fs.createReadStream('enem_simplificado.csv')
    .pipe(csv.parse({ 
        headers: true,
        delimiter: ';'
    }))
    .on('error', error => console.error(error))
    .on('data', data => {
        //aqui cada linha é retornado um objeto
        const filteredData = filterData(data)
        writeData(filteredData)
    }
    )
    .on('end', rowCount => console.log(`Lidas ${rowCount} linhas`));