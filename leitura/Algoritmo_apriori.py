import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from apyori import apriori

dadosEnem= pd.read_csv('enemFiltrado.csv', header=None)
qtdRegistros=len(dadosEnem)

print('A qtd de registros é de: ', qtdRegistros)

arrayRegistros=[] #array que se trasnformará em uma matriz com os registros

for i in range(0, qtdRegistros):
    arrayRegistros.append([str(dadosEnem.values[i, j]) for j in range(0, len(dadosEnem.values[i]))])



#algoritmo apriori
regrasDeAssociacao= apriori(arrayRegistros, 
                            min_support=0.02, 
                            min_confidence=0.2, 
                            min_lift= 2, 
                            min_length=2)
    
                       
resultadosDaAssociacao=list(regrasDeAssociacao)

print('Quantidade de regras de asoociação: ',resultadosDaAssociacao)


results=[]

for item in resultadosDaAssociacao:
    pair = item[0]
    items = [x for x in pair]
    print('resul items ',items)
    
    value0= str(items[0])
    value1= str(items[1])
    value2= str(item[1])[:7]#pega o valor de suporte
    value3= str(item[2][0][2])[:7]#pega o valor de confiança
    value4= str(item[2][0][3])[:7]#pega o valor do lift
    
    linha= (value0, value1, value2, value3, value4)
    
    results.append(linha)
    
    Label=['Dado1', 'Dado2', 'Suporte', 'Confiança', 'Lift']
    
    sugestaoEnem= pd.DataFrame.from_records(results, columns=Label)
    
    print(sugestaoEnem, '\n\n')#imprime resultados
