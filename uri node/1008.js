var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

var n = Number(lines.shift())

for(let i = 0; i<n ; i++){
    let numero = Number(lines.shift())
    if(numero%2==0){
        console.log(0)
    }else{
        console.log(1)
    }

}
