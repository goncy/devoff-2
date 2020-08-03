const express = require('express')
const bodyParser = require('body-parser')

const {transposeMessage} = require('./utils')

const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.post('/encrypt', (req, res) => {
  res.send(transposeMessage(req.body.mensaje, req.body.vueltas))
})

app.post('/decrypt', (req, res) => {
  res.send(transposeMessage(req.body.mensaje, req.body.vueltas))
})

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})