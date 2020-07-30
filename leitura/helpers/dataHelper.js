const fs= require('fs')

const NOME_ARQUIVO='./enemFiltrado.csv'

const writeHeader=()=>{
    linha='NU_IDADE,NU_NOTA_CN,NU_NOTA_CH,NU_NOTA_REDACAO,NU_NOTA_LC,NU_NOTA_MT,TP_ST_CONCLUSAO,Q005,Q006'+'\n'

    fs.writeFile(NOME_ARQUIVO, linha, err=>{
        if(err){
            console.log(err)
        }
     })
}


const filterData=(data)=>{
    const {
        NU_IDADE,
        NU_NOTA_CN,
        NU_NOTA_CH,
        NU_NOTA_REDACAO,
        NU_NOTA_LC,
        NU_NOTA_MT,
        TP_ST_CONCLUSAO,
        Q005,
        Q006
    }=data


    return {
        NU_IDADE,
        NU_NOTA_CN,
        NU_NOTA_CH,
        NU_NOTA_REDACAO,
        NU_NOTA_LC,
        NU_NOTA_MT,
        TP_ST_CONCLUSAO,
        Q005,
        Q006
    }
}


const writeData=(data)=>{
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

module.exports={writeHeader ,writeData, filterData}