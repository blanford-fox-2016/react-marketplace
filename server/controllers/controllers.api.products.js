import Product from '../models/models.api.products'

let getAllProducts = (req, res) => {
  Product.find({}, {}, {
    // skip: 1, // mulai dari index berapa
    // limit: 1 // mau nampilin berapa
  },
  (err, all_data) => {
    if(err){
      console.log(err);
    }else{
      res.json(all_data)
    }
  })
}

let addNewProduct = (req, res) => {
  Product.create({
    productId : req.body.productId,
    name: req.body.name,
    price: req.body.price,
    image_URL: req.body.image_URL,
    description: req.body.description
  }, (err, new_data) => {
    if(err){
      console.log(err);
    }else{
      res.json(new_data)
    }
  })
}

export { getAllProducts, addNewProduct }
// module.exports = {
//   getAllProducts,
//   addNewProduct
// }
