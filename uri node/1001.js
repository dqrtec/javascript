var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

y = Number(lines[1]);
x = Number(lines[0]);

console.log("X = "+(x+y)+"\n");