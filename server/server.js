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

app.get('/api/phonebooks/', function (req, res) {
    let perPage = 5
    let page = req.query.page || 1
    console.log(page)
    Data.find({}, {}, { skip: perPage * (page - 1), limit: perPage }, function (err, data) {
        console.log(data)
        if (err) res.json(err)
        else {
            let dataTemp = data
            Data.count(function (err, count) {
                var array = []
                console.log(Math.ceil(count/perPage))
                for (var i = 1; i <= Math.ceil(count/perPage); i++) {
                    if (i == page) {
                        array.push({active: true, label: i})
                    }
                    else {
                        array.push({active: false, label: i})
                    }
                }

                res.json({
                    data: dataTemp,
                    pagination: array
                })
            })
        }
    })
})

app.post('/api/phonebooks', function (req, res) {
    // console.log(req.body)
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