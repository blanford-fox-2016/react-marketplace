import Product from '../models/models.api.products'

let getAllProducts = (req, res) => {
  Product.find((err, all_data) => {
    if(err){
      console.log(err);
    }else{
      res.json(all_data)
    }
  })
    .sort({_id: -1})
    .skip(1)
    .limit(1)
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
