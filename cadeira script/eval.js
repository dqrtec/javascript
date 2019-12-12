var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/', function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  })
});

app.post("/upload",function(req,res){
    let funcao = funcaoInserida(req.body.funcao)
    let pagina = req.body.pagina

    var re = /{{[\s]*[0-9]*[\s]*}}/gm;
    partes = pagina.split(re)

    console.log(partes)

    var regexp = /{{[0-9]*}}/gi;
    var matches_array = pagina.match(regexp);
    let argumentosLimpos = []
    for (let index = 0; index < matches_array.length; index++) {
      let variavel = matches_array[index].substring(2, matches_array[index].length-2 )
      variavel = variavel.replace(" ","")
      argumentosLimpos.push( variavel )
    }

    res.write('    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>')
    res.write('<div class="card"><div class="card-header">Resultado</div><div class="card-body"><p class="card-text">      ')
    res.write(partes[0])
    for (let index = 1; index < partes.length; index++) {
       res.write( '<strong>'+ String( funcao(argumentosLimpos[index-1]) ) + '</strong>' )
       res.write( partes[index] )
    }
    res.write('</p></div></div>')
    res.end()
});


function funcaoInserida( f ){
  a = " return " + f
  nf = new Function(a)
  let funcao = nf()
  return funcao
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});