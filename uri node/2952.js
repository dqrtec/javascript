var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

var Tarefas = [
    {   
        letra:"A",//arroz
        custo:1700,
        beneficio:1650
    },
    {   
        letra:"C",//carne
        custo:15500,
        beneficio:2000
    },
    {   
        letra:"S",//soja
        custo:1800,
        beneficio:2000
    },
    {   
        letra:"M",//milho
        custo:450,
        beneficio:1000
    },
    {   
        letra:"P",
        custo:0,
        beneficio:13000
    },
    {   
        letra:"K",//carro
        custo:100,
        beneficio:80
    },
    {   
        letra:"B",//bicicleta
        custo:0,
        beneficio:40
    },
    {   
        letra:"N",
        custo:0,
        beneficio:0
    },
]

function separador(s){
    let sigla = s
    return function encontrar( tarefinhas){
        return tarefinhas.letra == s
    }
}

lines.shift()

var tarefinhas = lines.shift().split(" ")

var custo_beneficio = []

function soma(vetor,inicio,fim){
    somador = 0 
    for (let i = inicio; i <= fim; i++) {
        somador = somador + vetor[i];
    }
    return somador
}

function MinMax(custo_beneficio){
    let somador = 0
    let maximo = Number.NEGATIVE_INFINITY
    let minimo = Number.POSITIVE_INFINITY
    for (i in custo_beneficio){
        for (j in custo_beneficio){
            if(i<=j){
                somador = soma(custo_beneficio,i,j)
                if(somador >= maximo){
                    maximo = somador
                }
                if(somador <= minimo){
                    minimo = somador
                }
            }
        }
    }
    return [minimo, maximo]
}

for(t in tarefinhas){
    var sigla = tarefinhas[t]
    var mayra = Tarefas.find(separador(sigla))
    if(mayra.letra!='N'){
        custo_beneficio.push(mayra.beneficio-mayra.custo)
    }
}

if(custo_beneficio.length==0){
    console.log("0 0")
}else{
    var resposta = MinMax(custo_beneficio)
    console.log(resposta[1] +" "+resposta[0])
}