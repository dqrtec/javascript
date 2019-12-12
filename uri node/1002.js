var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');


const pi = 3.14159
var ray = Number(lines.shift())
var area = pi * (ray**2)

area = Number(area).toFixed(4)

console.log("A="+area)