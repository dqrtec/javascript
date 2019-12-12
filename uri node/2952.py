#n_horas = int(input())
#atividades = input().split(' ', n_horas)

n_horas = 3
atividades = "N N N".split(' ', n_horas)

n_horas = 7
atividades = "A C S P M K B".split(' ', n_horas)

beneficio = {
    'A' : -50,
    'C' : -13500,
    'S' : 200,
    'M' : 550,
    'P' : 13000,
    'K' : -20,
    'B' : 40,
    'N' : 0
}

impactos = []

for i in atividades:
    if(i!="N"):
        impactos.append( beneficio[i] )

if(len(impactos) == 0):
    print("0 0")
else:
    minimo = 99999999999999999999
    maximo = -99999999999999
    for i in range(len(impactos)):
        for j in range(i+1,len(impactos)+1):
            soma = sum(impactos[i:j])
            if soma >= maximo:
                maximo = soma
            if soma <= minimo:
                minimo = soma
    print(str(maximo)+" "+str(minimo))