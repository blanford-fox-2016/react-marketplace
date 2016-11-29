import mongoose from 'mongoose'

const Schema = mongoose.Schema

let ProductsSchema = new Schema ({
  productId   : {
    type      : Number,
    required  : true,
    unique    : true
  },
  name        : {
    type      : String,
    required  : true
  },
  price       : {
    type      : Number,
    required  : true
  },
  image_URL   : {
    type      : String,
    required  : true
  },
  description : {
    type      : String,
    required  : true
  }
})

export default mongoose.model('Products', ProductsSchema)
