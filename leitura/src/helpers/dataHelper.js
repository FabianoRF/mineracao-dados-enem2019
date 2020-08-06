const fs= require('fs')

const NOME_ARQUIVO='./enemFiltrado.csv'

const escreveCabecalho=()=>{
    linha='Conclusao-Ensino-Medio,Nota,Renda-Per-Capita,Tipo-Escola,Idade'+'\n'

    fs.writeFile(NOME_ARQUIVO, linha, err=>{
        if(err){
            console.log(err)
        }
     })
}


const filtraDados=(data)=>{
    const objFiltrado= {
        NU_IDADE: data.NU_IDADE,
        NU_NOTA_CN: data.NU_NOTA_CN,
        NU_NOTA_CH: data.NU_NOTA_CH,
        NU_NOTA_REDACAO: data.NU_NOTA_REDACAO,
        NU_NOTA_LC: data.NU_NOTA_LC,
        NU_NOTA_MT: data.NU_NOTA_MT,
        TP_ST_CONCLUSAO: data.TP_ST_CONCLUSAO,
        TP_ESCOLA: data.TP_ESCOLA,
        Q005: data.Q005,
        Q00: data.Q006
    }

    return objFiltrado
}


const escreveDados=(data)=>{
    //cria uma linha com os dados separados por virgula
    const linha =Object.values(data).join(',')+'\n'
    
    //options para o writefile
    const options={
        enconding:'utf-8',
        flag: 'a'
    }

    //escreve no arquivo
    fs.writeFile(NOME_ARQUIVO, linha, options, err=>{
        if(err){
            console.log(err)
        }
    })
}

module.exports={escreveCabecalho, escreveDados, filtraDados}