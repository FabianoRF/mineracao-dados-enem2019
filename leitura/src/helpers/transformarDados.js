const fs= require('fs')

const transformaCursandoEnsinoMedio = (dado)=>{
    if(dado == 1){
        TP_ST_CONCLUSAO = "Concluiu"
    } else if(dado == 2 || TP_ST_CONCLUSAO == 3){
        TP_ST_CONCLUSAO = "Cursando"
    } else {
        TP_ST_CONCLUSAO = "Nao Cursando"
    }

    return TP_ST_CONCLUSAO
}

const classesRenda = (renda) =>{
    if (renda <= 2495){
        return "0 - 2495"
    } else if (renda > 2495 && renda <= 4990){
        return "2495 - 4990"
    }
    else if (renda > 4990 && renda <= 7485){
        return "4990 - 7485"
    }
    else if (renda > 7485 && renda <= 9980){
        return "7485 - 9980"
    }
    else if (renda > 9980 && renda <= 12475){
        return "9980 - 12475"
    }
    else if (renda > 12475 && renda <= 14970){
        return "12475 - 14970"
    }
    else if (renda > 14970 && renda <= 17465){
        return "14970 - 17465"
    }
    else if (renda > 17465 && renda <= 19960){
        return "17465 - 19960"
    }
}

const transformaRenda = (pessoas, renda_bruta) =>{
    pessoas = parseInt(pessoas)
    let rendaPerCapita = 100000
    if (renda_bruta == 'A'){
        rendaPerCapita = 0
    } else if(renda_bruta == 'B'){
        rendaPerCapita = 998 / pessoas
    } else if(renda_bruta == 'C'){
        rendaPerCapita = 1497 / pessoas
    }  else if(renda_bruta == 'D'){
        rendaPerCapita = 1996 / pessoas
    }
    else if(renda_bruta == 'E'){
        rendaPerCapita = 1497 / pessoas
    }
    else if(renda_bruta == 'F'){
        rendaPerCapita = 2994 / pessoas
    }
    else if(renda_bruta == 'G'){
        rendaPerCapita = 3992 / pessoas
    }
    else if(renda_bruta == 'H'){
        rendaPerCapita = 4990 / pessoas
    }
    else if(renda_bruta == 'I'){
        rendaPerCapita = 5988 / pessoas
    }
    else if(renda_bruta == 'J'){
        rendaPerCapita = 6986 / pessoas
    }
    else if(renda_bruta == 'K'){
        rendaPerCapita = 7984 / pessoas
    }
    else if(renda_bruta == 'L'){
        rendaPerCapita = 8982 / pessoas
    }
    else if(renda_bruta == 'M'){
        rendaPerCapita = 9980 / pessoas
    }
    else if(renda_bruta == 'N'){
        rendaPerCapita = 11976 / pessoas
    }
    else if(renda_bruta == 'O'){
        rendaPerCapita = 14970 / pessoas
    }
    else if(renda_bruta == 'P' || renda_bruta == "Q"){
        rendaPerCapita = 19960 / pessoas
    }

    return classesRenda(rendaPerCapita)
}

const transformaNotas = (ch, cn, re, lc, mt) =>{
    if (ch == undefined || isNaN(ch) || ch == ''){
        ch = 0
    } else{
        ch = parseFloat(ch)
    }

    if (mt == undefined || isNaN(mt) || mt == ''){
        mt = 0
    }else{
        mt = parseFloat(mt)
    }

    if (lc == undefined || isNaN(lc) || lc == ''){
        lc = 0
    } else{
        lc = parseFloat(lc)
    }

    if (cn == undefined || isNaN(cn) || cn == ''){
        cn = 0
    } else{
        cn = parseFloat(cn)
    }

    if (re == undefined || isNaN(re) || re == ''){
        re = 0
    } else{
        re = parseFloat(re)
    }

    return classesNotas((ch + mt + lc + cn + re) / 5)
    
}

const classesNotas = (nota) =>{
    if (nota <= 141.043){
        return "0 - 141.043"
    } else if(nota > 141.043 && nota <= 282.087){
        return "141.043 - 282.087"
    } else if(nota > 282.087 && nota <= 423.130){
        return "282.087 - 423.130"
    } 
    else if(nota > 423.130 && nota <= 564.173){
        return "423.130 - 564.173"
    } 
    else if(nota > 564.173 && nota <= 705.217){
        return "564.173 - 705.217"
    } 
    else if(nota > 705.217 && nota <= 846.26){
        return "705.217 - 846.26"
    } 
}

const trasformaTipoEscola = (dado) =>{
	if(dado==1){
		TP_ESCOLA = "Nao Respondeu"
	}
	else if(dado==2){
		TP_ESCOLA = "Publica"
	}
	else if(dado==3){
		TP_ESCOLA = "Privada"
	}
	else if(dado==1){
		TP_ESCOLA = "Exterior"
	}
	
	return TP_ESCOLA
	
}

const trasformaIdadeClasses = (idade) =>{
    if (idade <= 19.6){
        return "1 - 19.6"
    } else if (idade > 19.6 && idade <= 38.2){
        return "19.6 - 38.2"
    }else if (idade > 38.2 && idade <= 56.8){
        return "38.2 - 56.8"
    }
    else if (idade > 56.8 && idade <= 75.4){
        return "56.8 - 75.4"
    }
    else if (idade > 75.4 && idade <= 94){
        return "75.4 - 94"
    }
}

module.exports={transformaCursandoEnsinoMedio, transformaNotas, transformaRenda, trasformaTipoEscola, trasformaIdadeClasses}