import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import routesProduct from './routes/routes.api.products'

const app = express()

mongoose.connect('mongodb://localhost/db_marketplace')
mongoose.Promise = global.Promise

app.use(cors())
app.use(logger())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/products', routesProduct)

app.listen(3000, (err) => {
  if(err){
    console.log(err);
  }else{
    console.log(`server is running in port 3000`);
  }
})
