<!DOCTYPE html>
<html>
<head>
	<script src="https://unpkg.com/vue" ></script>
	<style type="text/css">
		input[type=range][orient=vertical]
		{
		    writing-mode: bt-lr; /* IE */
		    -webkit-appearance: slider-vertical; /* WebKit */
		    width: 8px;
		    height: 175px;
		    padding: 0 5px;
		}
	</style>
</head>
<body>
<div id="app">
	
	<input type="range"  min="0" max="200" v-model="y" orient="vertical">
	<canvas id="tela" width="200" height="200" style="border:1px solid #c3c3c3;"></canvas><br>
	&nbsp&nbsp&nbsp&nbsp&nbsp<input type="range"  min="0" max="200" v-model="x">
	{{x}} {{y}} {{ alertar() }}
	
</div>
	<script >
		var app = new Vue({
			el:"#app",
			data:{
				titulo:"hariamy",
				x:"10",
				y:"10",
			},
			methods:{
				alertar(){
					desenhar(this)
				}
			},
			watch:{
				titulo(){
					alert("mudei de nome")
				},
				x(){
					desenhar(this)
				},
				y(){
					desenhar(this)
				}
			}
		})

		function desenhar(app) {
			var canvas = document.getElementById("tela");
			var ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = "#FF0000";
			var x = app.x
			var y = app.y
			ctx.fillRect(0,canvas.height-y,canvas.width,15);
			ctx.fillRect(x,0,15,canvas.height);
		}

	</script>
</body>
</html>
