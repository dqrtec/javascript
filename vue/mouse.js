<!DOCTYPE html>
<html>
<head>
	<script src="https://unpkg.com/vue" ></script>
</head>
<body>
<div id="app">
	<input type="range"  min="0" max="200" v-model="x">
	<input type="range"  min="0" max="200" v-model="y">
	<canvas id="tela" width="200" height="200" style="border:1px solid #c3c3c3;"></canvas>
	{{x}} {{y}} {{ alertar() }}
	
</div>
	<script >
		var app = new Vue({
			el:"#app",
			data:{
				x:"10",
				y:"10",
			},
			methods:{
				alertar(){
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
			ctx.fillRect(0,y,canvas.width,15);
			ctx.fillRect(x,0,15,canvas.height);
		}

	</script>
</body>
</html>
