var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');


var numero1 = Number(lines.shift())
var numero2 = Number(lines.shift())

console.log("SOMA = "+(numero1 + numero2))