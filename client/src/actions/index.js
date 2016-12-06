import * as types from '../constants'
import request from 'superagent'

const PRODUCTS_API_URL = 'http://localhost:3000/api/products'

// ==--==--==--==--==--==--==--==--==--==--==--==--
// load products
// ==--==--==--==--==--==--==--==--==--==--==--==--
let loadStateProducts = () => {
  return {
    type: types.LOAD_PRODUCTS
  }
}

let loadProductsFailure = () => {
  return {
    type: types.LOAD_PRODUCTS_FAILURE
  }
}

let loadProductsSuccess = (products) => {
  return {
    type: types.LOAD_PRODUCTS_SUCCESS,
    products: products
  }
}

let loadProducts = () => {
  return dispatch => {
    dispatch(loadStateProducts())
    return request
            .get(PRODUCTS_API_URL)
            .set('Accept', 'application/json')
            .end((err, res) => {
              if(err){
                console.error(err)
                dispatch(loadProductsFailure())
              }else{
                dispatch(loadProductsSuccess(res.body))
              }
            })
  }
}

// ==--==--==--==--==--==--==--==--==--==--==--==--
// add product
// ==--==--==--==--==--==--==--==--==--==--==--==--
let addStateProduct = (productId, data_product) => {
  return {
    type: types.ADD_PRODUCT,
    productId: productId,
    data_product: data_product
  }
}

let addProductFailure = () => {
  return {
    type: types.ADD_PRODUCT_FAILURE
  }
}

let addProductSuccess = (product) => {
  return {
    type: types.ADD_PRODUCT_SUCCESS,
    product: product
  }
}

let addProduct = (data_product) => {
  let productId = Date.now()

  return dispatch => {
    dispatch(addStateProduct(productId, data_product))
    return request
            .get(PRODUCTS_API_URL)
            .set('Accept', 'application/json')
            .type('form')
            .send({
              productId : productId,
              name: data_product.name,
              price: data_product.price,
              image_URL: data_product.image_URL,
              description: data_product.description
            })
            .end((err, res) => {
              if(err){
                console.error(err)
                dispatch(addProductFailure())
              }else{
                dispatch(addProductSuccess(res.body))
              }
            })
  }
}

export {
  loadProducts,
  addProduct
}
