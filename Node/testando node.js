var http = require("http")
var url = require("url")
var fs = require("fs")
var formidable = require("formidable")

http.createServer(function (req,res){
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm()
        form.parse(req, function(err,fields,files){
            var oldpath = files.filetoupload.path;
      var newpath = files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
        })
    } else{
        fs.readFile("./index.html", function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            var informacoes = url.parse(req.url,true).query
            //res.write(`<img src='https://http.cat/${estado}.jpg'>`)
            res.end(informacoes.ano)
        
        })
    }
    
}).listen(8080)