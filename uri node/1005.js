var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

var pesos = [3.5, 7.5]

var numero1 = Number(lines.shift())
var numero2 = Number(lines.shift())

var media = (numero1*pesos[0] + numero2*pesos[1])/ 11
console.log(media)
media = media.toFixed(5)

console.log("MEDIA = "+media)