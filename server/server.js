var fs = require('fs')
var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()

var PHONEBOOKS_FILE = path.join(__dirname, 'phonebooks.json')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/react-marketplace')

const Data = require('./model')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/phonebooks', function (req, res) {
    let perPage = 5
    let page = req.param('page') > 0 ? req.param('page') : 0
    Data.find({}, {}, { skip: perPage * page, limit: perPage }, function (err, data) {
        console.log(data)
        if (err) res.json(err)
        else res.json(data)
    })
})

app.post('/api/phonebooks', function (req, res) {
    console.log(req.body)
    let data = {
        dataId: req.body.dataId,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image
    }

    Data.create(data, (err, data) => {
        if (err) res.json(err)
        else res.json(data)
    })
})

app.listen(8000, function () {
    console.log('server is running on port 8000')
})