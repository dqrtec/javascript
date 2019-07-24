<!DOCTYPE html>
<html>
<head>
	<title>Aula 1</title>
</head>
<body>

	<div id="app"><!--este sera um objeto que sera manipulado pelo vue-->
		<h1 v-if="montrar_if">{{ titulo }}</h1><!--cria ou nao o html-->
		<p v-show="montrar_show" ><!--carrega o html mas nao mostra-->
			Texto de apresentação do show
		</p>

		<input type="text" name="va" v-model="variavel" /><!--o texto digitado sera atrelado ao valor da  variavel variavel-->
		<button v-on:click="enviar()"> Salvar ! </button><!--executa um metodo exclusivo do objeto vue-->

		<ul>
			<li v-for="linguagem in linguagens"><!--ira repetir o html para cada um dos elementos da lista-->
				 {{ linguagem.nome | toUpperCase() | readMore() }}<!--mostra valores com os seguintes filtros de apresentacao-->
			</li>

		</ul>
		
		<menu-bar></menu-bar><!--ira replicar o template-->

		<img v-bind:src="caminhoImagem"><!--atrela o caminho da imagem com o valor da variavel-->
	</div>

	<template id="lista"><!--template a ser utilizado pelo menu-bar-->
		<div>
			<li>Item 1</li>
			<li>Item 2</li>
		</div>
	</template>


	<script src="https://unpkg.com/vue"></script><!--importa o vue js-->
	<script>
		
		Vue.component('menu-bar',{
			template:"#lista"
		})//Cria componente que contem o html do template de id #lista

		var app = new Vue({
			el:"#app",//define o elemento html em que ira rodar o vue
			data:{
				titulo:"for em vue",
				variavel:"",
				montrar_if:false,
				montrar_show:false,
				caminhoImagem:"https://pics.conservativememes.com/olha-esse-pato-bb-tdo-molhadinho-o-nome-dele-eh-20997085.png",
				linguagens:[
					{nome: "javaScrip"},
					{nome: "pHP"},
					{nome: "c#"},
					{nome: "python"}

				]
			},

			computed:{//se qualquer variavel do 
				mudar(){
					app.caminhoImagem = "200w.webp"
					console.log("todas as variavei foram mudaddes"," da")
				}
			},

			watch:{//verifica e dispara um gatilho quando unicamente a variavel variavel for alterada
				variavel(novoValor,antigoValor){
					app.caminhoImagem = "200w.webp"
				}
			},

			filters:{//filtros de apresentacao de texto
				toUpperCase(nomeMenusculo){
					return nomeMenusculo.toUpperCase()
				},

				readMore(textoEntrada){
					var texto = textoEntrada.substring(0,3)
					if (textoEntrada.length>3) {
						texto = texto + "..."
					}

					return texto
				}
			},

			methods:{//metodos exclusivos do objeto
				enviar(){
					app.linguagens.push({nome:app.variavel})
					app.variavel = ""
				},
			}
		});
	</script>
</body>
</html>
