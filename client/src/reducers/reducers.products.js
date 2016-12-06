import {  LOAD_PRODUCTS,
          LOAD_PRODUCTS_SUCCESS,
          LOAD_PRODUCTS_FAILURE,
          ADD_PRODUCT,
          ADD_PRODUCT_SUCCESS,
          ADD_PRODUCT_FAILURE
        } from '../constants'

const initialState = []

export default data = (state = initialState, action){
  switch (action.type) {
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // add products
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    case LOAD_PRODUCTS:
      return state;
      break;

    case LOAD_PRODUCTS_SUCCESS:
      return action.products;
      break;

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // add product
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    case ADD_PRODUCT:
      return [{
        productId   : action.data_product.productId,
        name        : action.name.productId,
        price       : action.price.productId,
        image_URL   : action.image_URL.productId,
        description : action.description.productId,
        status      : "temp"
      },
      ...state]
      break;

    case ADD_PRODUCT_SUCCESS:
      let index = state.map(product => { return product.productId }).indexOf(action.product.productId)

      if(index !== -1){
        let latest_products = state.filter(product => { return product.status != 'temp'})

        return [action.product, ...latest_products]
      }else{
        return state
      }
      break;

    case LOAD_PRODUCTS_FAILURE:
    case ADD_PRODUCT_FAILURE:
    default:
      return state;
      break;
  }
}
