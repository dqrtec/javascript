//Declarando
	// var -> variavel global 
	// let -> Variavel local
var a = 48
var a //a = 48
let b
var z = 123e-5;     // 0.00123

// Number
var maior NumeroPossivel = Infinity
var x = new Number(500); // numero com objeto
x.toFixed(3);  // quantidade de casas decimais
x.toPrecision(2); // arredondar numero
var ValorHexadecimimal = 0xFF; //255
	//Converter para bases diferente
	var myNumber = 32;
	myNumber.toString(20);

//Receber Valores
var x = pompt("digite o valor de x")
var y = pompt("digite o valor de y")

//conversao
var xInteiro = Number.parseInt(x)
var yDecimal = Number.parseFloat(y)

var soma = xInteiro + yDecimal

//Converter para string
soma.toString()
String(soma)

alert(" a soma de x="+xInteiro+" y="+yDecimal+" é igual a ="+soma)
alert(` a soma de x=${xInteiro} y=${yDecimal} é igual a =${soma}`)//template de string

var nomeAluno = "aberovaldo"
nomeAluno.toUpperCase()
nomeAluno.toLowerCase()
nomeAluno.length

//Operador, Atribuição condicional
	// teste_logico ? Se_Verdadeiro : se_Falso
var x = true?15:10

//Selecionar Elementos
window.document.
	getElementsByTagName()
	getElementById()
	getElementsByName()
	getElementsByClasseName()

	querySelector('tag#id')
	querySelectorAll('tag#id')

//Eventos
a.addEventListener("NomeEventoReservadoJavaScript",nomeSuaFuncao)

//Array
a = []
a = [40,50,30] //0,1,2
a.push(3) // 40,50,30,3
a.sort()//3,30,40,50
a.indexOf(40)//2 -1-> false
a.toString()
a.join(" - ")

//Repeticao
for(var i in a){

}

//Objeto
var Pessoa = {nome:"nomePessoa",idade:15,setIdade(novaIdade){}}