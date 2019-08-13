const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/loginuser', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário logado!</h1>')
})

app.post('/insertuser', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Incluido!</h1>')
})

app.listen('3003')