import {  LOAD_PRODUCTS,
          LOAD_PRODUCTS_SUCCESS,
          LOAD_PRODUCTS_FAILURE,
          ADD_PRODUCT,
          ADD_PRODUCT_SUCCESS,
          ADD_PRODUCT_FAILURE
        } from '../constants'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // add products
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    case LOAD_PRODUCTS:
      return state;

    case LOAD_PRODUCTS_SUCCESS:
      return action.products;

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // add product
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    case ADD_PRODUCT:
      return [{
        productId   : action.productId,
        name        : action.data_product.name,
        price       : action.data_product.price,
        image_URL   : action.data_product.image_URL,
        description : action.data_product.description,
        status      : "temp"
      },
      ...state]

    case ADD_PRODUCT_SUCCESS:
      let index = state.map(product => { return product.productId }).indexOf(action.product.productId)

      if(index !== -1){
        let latest_products = state.filter(product => { return product.status !== 'temp'})

        return [action.product, ...latest_products]
      }else{
        return state
      }

    case LOAD_PRODUCTS_FAILURE:
    case ADD_PRODUCT_FAILURE:
    default:
      return state;
  }
}
