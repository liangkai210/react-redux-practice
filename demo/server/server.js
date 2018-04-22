const express = require('express')
const mongoose = require('mongoose')

// connect to mongodb
const DB_URL = 'mongodb://localhost:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('mongo connected success')
})

const app = express()
app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>')
})

app.get('/data', function (req, res) {
    res.json({ name: 'kai', gender: 'M' })
})

app.listen(3000, function () {
    console.log('Node app is listening port 3000')
})
